const { Pregunta, Respuesta } = require('../models/index');

exports.createQuestion = (req, res) => {
    try {
        let img = '';
        if (req.file && req.file.filename) {
            img = req.file.filename;
        }
        let resp = req.body.respuestas;

        Pregunta.create({
            cuestionarioId: req.body.cuestionarioId,
            titulo: req.body.titulo,
            img: img,
            respuestas: resp
        }, {
            include: [{
                model: Respuesta,
                as: 'respuestas'
            }]
        }).then(p => {
            res.json(p);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getAllByQuizzID = async (req, res) => {
    const { cuestionarioId } = req.params;
    try {
        const quizz = await Pregunta.findAll({
            attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
            where: { cuestionarioId: cuestionarioId, estado: 'A' },
            include: {
                model: Respuesta,
                as: "respuestas",
                attributes: ["respuestaId", "descripcion", "valor"],
                where: { estado: 'A' }
            }
        });
        res.json(quizz);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.deleteQuestion = async (req, res) => {
    const { preguntaId } = req.params;
    try {
        const question = await Pregunta.findByPk(preguntaId);
        if (question === null) {
            res.json({
                status: false,
                message: 'Pregunta no encontrada',
            });
        } else {
            question.estado = 'E';
            question.save();
            await Respuesta.update({ estado : 'E' }, { where : { preguntaId : preguntaId }});
            res.json({
                status: true,
                message: 'Pregunta eliminada con éxito',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}