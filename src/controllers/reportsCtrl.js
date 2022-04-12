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
                where: { estado: 'A' },
                attributes: [],
            },
            group: ['grupoId'],
        });
        const cantidadGrupos = grupo.length;
        const cantidadEstudiantes = JSON.parse(JSON.stringify(grupo)).map(d => d.cantidadEstudiantes).reduce((a, b) => a + b);

        const quizzPlayer = await Cuestionario.count({
            where: { estado: 'A', userId: userId },
            include: {
                model: QuizzPlayer,
                where: { estado: 'A' },
            },
        });

        const comodin = await QuizzPlayer.findAll({
            attributes: [
                'comodin',
            ],
            include: [
                {
                    model: Cuestionario,
                    as: 'cuestionario',
                    attributes: [],
                    where: { userId: userId, estado: 'A' }
                },
            ],
            raw: true,
        });
        const useComodin = comodin.filter(d => d.comodin == true).length;
        console.log(useComodin, comodin.length);
        const mediaComodin = (useComodin/comodin.length)*100; 
        res.json({
            cuestionarios: quizz,
            grupos: {
                total_grupos: cantidadGrupos,
                total_estudiantes: cantidadEstudiantes
            },
            cuestionarios_resueltos: quizzPlayer,
            porcentajeComodin: mediaComodin
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.averages = async (req, res) => {
    try {
        const { userId } = req.params;

        const promedios = await QuizzPlayer.findAll({
            attributes: [
                'cuestionarioId', 'cuestionario.codigo', 'cuestionario.fecha_disp', [Sequelize.fn('AVG', Sequelize.col('calificacion')), 'promedio'],
            ],
            include: [
                {
                    model: Cuestionario,
                    as: 'cuestionario',
                    attributes: [],
                    where: { userId: userId, estado: 'A' }
                },
            ],
            raw: true,
            group: ['cuestionario.cuestionarioId'],
            order: [
                [Sequelize.col('cuestionario.fecha_disp'), 'DESC'],
            ],
            limit: 5
        });
        res.json(promedios)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.averagesPorcent = async (req, res) => {
    try {
        const { userId } = req.params;

        const promedios = await QuizzPlayer.findAll({
            attributes: [
                'porcentaje',
            ],
            include: [
                {
                    model: Cuestionario,
                    as: 'cuestionario',
                    attributes: [],
                    where: { userId: userId, estado: 'A' }
                },
            ],
            raw: true,
        });
        
        const regular = promedios.filter((x) => { return x.porcentaje >= 0 && x.porcentaje <25; }).length;
        const bueno = promedios.filter((x) => { return x.porcentaje >= 25 && x.porcentaje <50; }).length;
        const muy_bueno = promedios.filter((x) => { return x.porcentaje >= 50 && x.porcentaje <75; }).length;
        const excelente = promedios.filter((x) => { return x.porcentaje >= 75 && x.porcentaje <=100; }).length;
        
        let datos = [];
        datos.push({detalle: 'regular', cantidad: regular});
        datos.push({detalle: 'bueno', cantidad: bueno});
        datos.push({detalle: 'muy_bueno', cantidad: muy_bueno});
        datos.push({detalle: 'excelente', cantidad: excelente});
        
        res.json(datos);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}