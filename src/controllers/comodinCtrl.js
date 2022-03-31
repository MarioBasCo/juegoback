const { QuizzPlayer, QuestionAnswer, Cuestionario, Respuesta, Sequelize, sequelize } = require('../models/index');


exports.createNew = async (req, res) => {
    try {
        const {
            quizzPlayerId,
            preguntaId,
            respuestaId,
        } = req.body;

        QuestionAnswer.create({
            quizzPlayerId: quizzPlayerId,
            preguntaId: preguntaId,
            respuestaId: respuestaId
        }).then(p => {
            QuizzPlayer.update({
                comodin: true,
            }, {
                where: {
                    quizzPlayerId: p.quizzPlayerId
                }
            }).then(result => {
                res.json({
                    status: true,
                    message: 'Info Creada',
                    data: p
                });
            }).catch(err => {
                console.log(error);
                res.status(500).json(err);
            }); 
            /* res.json({
                status: true,
                message: 'Info Creada',
                data: p
            }); */
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                status: false,
                message: 'Error al crear',
                err
            }); 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.resetParamsQuizz = async (req, res) => {
    try {
        const { quizzPlayerId } = req.params;

        const quizzPlayer = await QuizzPlayer.findOne({
            where: { estado: 'A', quizzPlayerId: quizzPlayerId },
        });

        const answers = await QuestionAnswer.findAll({
            where: { estado: 'A', quizzPlayerId: quizzPlayerId },
            include: {
                model: Respuesta,
                as: "respuestas",
                attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                where: { estado: 'A', respuestaId: Sequelize.col('QuestionAnswer.respuestaId') },
            }
        });

        const quizz = await Cuestionario.findOne({
            where: { estado: 'A' },
            include: {
                model: QuizzPlayer,
                attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                where: { estado: 'A', quizzPlayerId: quizzPlayerId },
            }
        });

        const valorRespuesta = answers.map(d => d.respuestas).map(v => v.valor);
        const respCorrectas = valorRespuesta.filter(i => i === true).length;
        const num_preguntas = quizz.num_preguntas;
        const ponderacion = 10;
        const preguntas = num_preguntas - 1;
        const valorPorPreg = ponderacion / preguntas;
        const nota = respCorrectas * valorPorPreg;
        const porcentaje = (respCorrectas*100)/preguntas;
        
        quizzPlayer.calificacion = nota;
        quizzPlayer.porcentaje = porcentaje;
        quizzPlayer.save();

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