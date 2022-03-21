const { QuizzPlayer, QuestionAnswer, Cuestionario, Grupo, Jugador, Sequelize, sequelize } = require('../models/index');
const Op = Sequelize.Op;

exports.getInfo = async (req, res) => {
    const { userId } = req.params;
    try {
        const quizz = await Cuestionario.count({
            where: { estado: 'A', userId: userId },
            attributes: [[sequelize.fn('COUNT', 0), 'count']]
        });

        const grupo = await Grupo.findAll({
            where: { estado: 'A', userId: userId },
            attributes: {
                include: [[Sequelize.fn("COUNT", Sequelize.col("jugadores.grupoId")), "cantidadEstudiantes"]],
                exclude: ['userId', 'estado', 'createdAt', 'updatedAt']
            },
            include: {
                model: Jugador,
                as: 'jugadores',
                required: false,  
                where: { estado: 'A'},
                attributes: [],
            },
            group: ['grupoId'],
        });
        const cantidadGrupos = grupo.length;
        const cantidadEstudiantes = JSON.parse(JSON.stringify(grupo)).map(d => d.cantidadEstudiantes).reduce((a, b) => a+b);

        const quizzPlayer = await Cuestionario.count({
            where: { estado: 'A', userId: userId },
            include: {
                model: QuizzPlayer, 
                where: { estado: 'A'},
            },
        });

        res.json({
            cuestionarios: quizz,
            grupos: {
                total_grupos: cantidadGrupos,
                total_estudiantes: cantidadEstudiantes
            },
            cuestionarios_resueltos: quizzPlayer,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}