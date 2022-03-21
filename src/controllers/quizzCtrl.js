const { Cuestionario, Usuario, Pregunta, Respuesta, Sequelize, sequelize } = require('../models/index');
//const users = await User.findAll();
const Op = Sequelize.Op;

exports.getAll = async (req, res) => {
    try {
        const quizz = await Cuestionario.findAll({
            include: {
                model: Usuario,
                as: "usuario",
                attributes: ["userId", "nombre", "apellido"],
            }
        });
        res.json(quizz);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getOne = async (req, res) => {
    const { cuestionarioId } = req.params;
    try {
        const quizz = await Cuestionario.findOne({
            where: { cuestionarioId: cuestionarioId },
            attributes: { exclude: ['userId', 'estado', 'createdAt', 'updatedAt'] },
            include: {
                model: Pregunta,
                as: "preguntas",
                attributes: { exclude: ['preguntaId', 'cuestionarioId', 'estado', 'createdAt', 'updatedAt'] },
                where: { estado: 'A' },
                include: {
                    model: Respuesta,
                    as: "respuestas",
                    attributes: { exclude: ['respuestaId', 'preguntaId', 'estado', 'createdAt', 'updatedAt'] },
                    where: { estado: 'A' },
                }
            }
        });
        res.json(quizz);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getOneSearch = async (req, res) => {
    const { codigo } = req.params;
    try {
        const quizz = await Cuestionario.findOne({where: { codigo: codigo }});
        
        if (quizz === null) {
            res.json({
                status: false,
                message: 'No se encontró el cuestionario, código incorrecto',
            });
        } else {
            const quizzFull = await Cuestionario.findOne({
                where: { codigo: codigo },
                include: {
                    model: Pregunta,
                    as: "preguntas",
                    attributes: { exclude: ['estado', 'createdAt', 'updatedAt'] },
                    where: { estado: 'A' },
                    order: sequelize.random(), limit: quizz.num_preguntas,
                    include: {
                        model: Respuesta,
                        as: "respuestas",
                        attributes: { exclude: ['valor', 'estado', 'createdAt', 'updatedAt'] },
                        order: sequelize.random(), limit: await Respuesta.count({
                            col: 'preguntaId',
                            where: { preguntaId: "preguntaId" }
                        }),
                        where: { estado: 'A' },
                    }
                },
            });
            res.json({
                status: true,
                message: 'cuestionario encontrado',
                data: quizzFull
            });
        }  
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getAllByUserID = async (req, res) => {
    const { userId } = req.params;
    try {
        const quizz = await Cuestionario.findAll({
            where: { userId: userId, 
                estado: {
                    [Op.not]: 'E'
                }
            },
            /* include: {
                model: Usuario,
                as: "usuario",
                attributes: ["userId", "nombre", "apellido"],
            } */
        });
        res.json(quizz);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.createCuestionario = (req, res) => {
    try {
        //const { userId, titulo, descripcion } = req.body;
        //console.log(userId, titulo, descripcion);
        Cuestionario.create({
            userId: req.body.userId,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            fecha_disp: req.body.fecha_disp
        }).then(quizz => {
            res.json(quizz);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.updateParamQuizz = (req, res) => {
    const { cuestionarioId } = req.params;
    const { codigo, num_preguntas, estado } = req.body;
    Cuestionario.update({
        codigo: codigo,
        num_preguntas: num_preguntas,
        estado: estado
    }, {
        where: {
            cuestionarioId: cuestionarioId
        }
    }).then(result => {
        res.json({
            status: true,
            message: 'Actualizado con éxito',
            data: result
        });
    }).catch(err => {
        res.status(500).json(err);
    });
}

exports.deleteQuizz = async (req, res) => {
    const { cuestionarioId } = req.params;
    try {
        const quizz = await Cuestionario.findByPk(cuestionarioId);
        if (quizz === null) {
            res.json({
                status: false,
                message: 'Cuestionario no encontrado',
            });
        } else {
            quizz.estado = 'E',
            quizz.save();
            res.json({
                status: true,
                message: 'Cuestionario eliminado',
            });
        }
    } catch (error) {
        res.status(500).json(err);
    }
}