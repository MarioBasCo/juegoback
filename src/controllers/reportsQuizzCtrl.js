const { QuizzPlayer, QuestionAnswer, Cuestionario, Pregunta, Respuesta, Jugador, Sequelize, sequelize } = require('../models/index');
const Op = Sequelize.Op;


exports.getResultQuizz = async (req, res) => {
    try {
        const { cuestionarioId } = req.params;

        const quizzPlayer = await QuizzPlayer.findAll({
            attributes: {
                include: [[Sequelize.fn("COUNT", Sequelize.col("respuestas.respuestaId")), "aciertos"]],
                exclude: ['estado', 'createdAt', 'updatedAt']
            },
            where: { estado: 'A', cuestionarioId: cuestionarioId },
            include: [
                {
                    model: Jugador,
                    as: 'jugador',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A' },
                },
                {
                    model: QuestionAnswer,
                    as: 'respuestas',
                    where: { estado: 'A' },
                    attributes: [],
                    required: false,
                    include: [
                        {
                            model: Respuesta,
                            as: 'respuestas',
                            attributes: [],
                            where: { estado: 'A', valor: true },
                        },
                    ],
                    //group: ['quizzPlayerId'],
                },
                
                /* {
                    model: Cuestionario,
                    as: 'cuestionario',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A' },
                }, */
                /* {
                    model: QuestionAnswer,
                    as: 'respuestas',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A' },
                    include: [
                        {
                            model: Pregunta,
                            as: 'pregunta',
                            attributes: {
                                exclude: ['estado', 'createdAt', 'updatedAt']
                            },
                            where: { estado: 'A' },
                            include: [
                                {
                                    model: Respuesta,
                                    as: 'respuestas',
                                    attributes: {
                                        exclude: ['estado', 'createdAt', 'updatedAt']
                                    },
                                    where: { estado: 'A' },
                                },
                            ]
                        },
                    ]
                } */
            ],
            group: ['quizzPlayerId'],
        });

        if (quizzPlayer === null) {
            res.json({
                status: false,
                message: 'No se encontó información',
                data: quizzPlayer
            });
        } else {
            res.json({
                status: true,
                message: 'Información encontrada',
                data: quizzPlayer
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}



exports.getResultOneQuizz = async (req, res) => {
    try {
        const { quizzPlayerId } = req.params;

        const quizzPlayer = await QuizzPlayer.findOne({
            attributes: {
                //include: [[Sequelize.fn("COUNT", Sequelize.col("respuestas.respuestaId")), "aciertos"]],
                exclude: ['estado', 'createdAt', 'updatedAt']
            },
            where: { estado: 'A', quizzPlayerId: quizzPlayerId },
            include: [
                {
                    model: Jugador,
                    as: 'jugador',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A' },
                },
                {
                    model: Cuestionario,
                    as: 'cuestionario',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A' },
                }, 
                /* {
                    model: QuestionAnswer,
                    as: 'respuestas',
                    where: { estado: 'A' },
                    //attributes: [],
                    include: [
                        {
                            model: Pregunta,
                            as: 'pregunta',
                            //attributes: [],
                            where: { estado: 'A' },
                            include: [
                                {
                                    model: Respuesta,
                                    as: 'respuestas',
                                    attributes: [],
                                    where: { estado: 'A', valor: true },
                                },
                            ],
                        },    
                    ]
                    
                    //group: ['quizzPlayerId'],
                }, */
                
                
                {
                    model: QuestionAnswer,
                    as: 'respuestas',
                    attributes: {
                        exclude: ['estado', 'createdAt', 'updatedAt']
                    },
                    where: { estado: 'A', quizzPlayerId: Sequelize.col('QuizzPlayer.quizzPlayerId') },
                    include: [
                        {
                            model: Pregunta,
                            as: 'pregunta',
                            attributes: {
                                exclude: ['estado', 'createdAt', 'updatedAt']
                            },
                            where: { estado: 'A' },
                            include: [
                                {
                                    model: Respuesta,
                                    as: 'respuestas',
                                    attributes: {
                                        exclude: ['estado', 'createdAt', 'updatedAt']
                                    },
                                    where: { estado: 'A' },
                                },
                            ]
                        },
                    ],
                } 
            ],
        });

        if (quizzPlayer === null) {
            res.json({
                status: false,
                message: 'No se encontó información',
                data: quizzPlayer
            });
        } else {
            res.json({
                status: true,
                message: 'Información encontrada',
                data: quizzPlayer
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}