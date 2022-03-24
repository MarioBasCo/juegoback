const { QuizzPlayer, QuestionAnswer, Sequelize, sequelize } = require('../models/index');


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
                    quizzPlayerId: quizzPlayerId
                }
            }).then(result => {
                res.json({
                    status: true,
                    message: 'Info Creada',
                    data: p
                });
            }).catch(err => {
                res.status(500).json(err);
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