const { QuizzPlayer, QuestionAnswer, Cuestionario, Respuesta, Sequelize, sequelize } = require('../models/index');
const Op = Sequelize.Op;

exports.getAnswerPlayer = async (req, res) => {
    try {
        const { quizzPlayerId } = req.params;

        const answers = await QuestionAnswer.findAll({
            where: { estado: 'A', quizzPlayerId: quizzPlayerId },
            include: {
                model: Respuesta,
                as: "respuestas",
                attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                where: { estado: 'A', respuestaId: Sequelize.col('QuestionAnswer.respuestaId') },
            }
        });

        const quizzPlayer = await Cuestionario.findOne({
            where: { estado: 'A' },
            include: {
                model: QuizzPlayer,
                attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                where: { estado: 'A', quizzPlayerId: quizzPlayerId },
            }
        });

        const valorRespuesta = answers.map(d => d.respuestas).map(v => v.valor);
        const respCorrectas = valorRespuesta.filter(i => i === true).length;
        const num_preguntas = quizzPlayer.num_preguntas;
        const ponderacion = 10;
        const preguntas = num_preguntas - 1;
        const valorPorPreg = (ponderacion / preguntas).toFixed(2);
        const nota = respCorrectas * valorPorPreg;
        
        res.json({
            preguntas: preguntas,
            aciertos: respCorrectas,
            calificacion: nota
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.validateResolve = async (req, res) => {
    try {
        const {
            jugadorId,
            cuestionarioId,
        } = req.params;
        

        const quizzPlayer = await QuizzPlayer.findOne({
            where: { estado: 'A', jugadorId: jugadorId, cuestionarioId: cuestionarioId },
        });
    
        if(quizzPlayer === null){
            res.json({
                status: false,
                message: 'Aún no se han registrado respuestas'
            });
        }else {
            res.json({
                status: true,
                message: 'Usted ya resolvió el cuestionario'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
}

exports.createNew = async (req, res) => {
    try {
        const {
            jugadorId,
            cuestionarioId,
            respuestasJugador,
        } = req.body;

        await QuizzPlayer.create({
            jugadorId: jugadorId,
            cuestionarioId: cuestionarioId,
            respuestas: respuestasJugador
        }, {
            include: [{
                model: QuestionAnswer,
                as: 'respuestas'
            }]
        }).then(async p => {
            const quizz = await Cuestionario.findOne({
                where: { estado: 'A', cuestionarioId: p.cuestionarioId },
            });

            const answers = await QuestionAnswer.findAll({
                where: { estado: 'A', quizzPlayerId: p.quizzPlayerId },
                include: {
                    model: Respuesta,
                    as: "respuestas",
                    attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                    where: { estado: 'A', respuestaId: Sequelize.col('QuestionAnswer.respuestaId') },
                }
            });

            const valorRespuesta = answers.map(d => d.respuestas).map(v => v.valor); // Respuestas del usuario
            const respCorrectas = valorRespuesta.filter(i => i === true).length; //respuestas correctas
            const num_preguntas = quizz.num_preguntas;
            const ponderacion = 10;
            const preguntas = num_preguntas - 1; //Sin el comodín
            const valorPorPreg = ponderacion / preguntas;
            const nota = respCorrectas * valorPorPreg;
            p.calificacion = nota;
            p.porcentaje = (respCorrectas*100)/preguntas;
            p.save()
            res.json({
                status: true,
                message: 'Info Creada',
                data: p
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                status: true,
                message: 'Error al crear',
                err
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}