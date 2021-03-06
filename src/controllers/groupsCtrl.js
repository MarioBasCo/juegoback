const { sequelize, Sequelize } = require('../models/index');
const { QueryTypes } = require('sequelize');
const { Grupo, Jugador } = require('../models/index');

exports.createGroup = (req, res) => {
    try {
        const { userId, nombre_grupo } = req.body;
        
        Grupo.create({
            userId: userId,
            nombre_grupo: nombre_grupo,
        }).then(group => {
            //res.json(group);
            res.json({
                status: true,
                message: 'Grupo Creado con exito',
                data: group
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getAllByUserID = async (req, res) => {
    const { userId } = req.params;
    try {
        const sql = `SELECT g.grupoId, g.userId, g.nombre_grupo, 
        COUNT(j.grupoId) AS estudiantes FROM grupos g
        LEFT JOIN jugadores j ON g.grupoId = j.grupoId
        WHERE (j.estado IS NULL || j.estado = 'A') AND g.estado = 'A'
        AND g.userId = ${userId}
        GROUP BY g.grupoId`;
        
        //const groups = await sequelize.query(sql, { type: QueryTypes.SELECT });
        const groups = await Grupo.findAll({
            where: { userId: userId, estado: 'A' },
            attributes: {
                include: [[Sequelize.fn("COUNT", Sequelize.col("jugadores.grupoId")), "estudiantes"]],
                exclude: ['userId', 'estado', 'createdAt', 'updatedAt']
            },
            include: {
                model: Jugador,
                as: "jugadores",
                required: false, 
                attributes: [],
                where: { estado: 'A' }
            },
            group: ['grupoId'],
        });
        res.json(groups);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getAllFullByIDs = async (req, res) => {
    const { grupoId } = req.params;
    console.log(grupoId);
    try {
        const groups = await Grupo.findAll({
            attributes: ["grupoId", "nombre_grupo"],
            where: { grupoId: grupoId, estado: 'A' },
            include: {
                model: Jugador,
                as: "jugadores",
                attributes: ["nombre", "apellido", "player_name"],
            }
        });
        res.json(groups);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getOneByID = async (req, res) => {
    const { grupoId } = req.params;
    const group = await Grupo.findOne({ where: { grupoId: grupoId } });
    if (group == null) {
        res.json({
            status: false,
            message: 'Grupo no encontrado'
        });
    } else {
        res.json({
            status: true,
            data: group
        });
    }
}

exports.editGroup = (req, res) => {
    try {
        const { grupoId } = req.params;
        const { nombre_grupo } = req.body;
        
        Grupo.update({
            nombre_grupo: nombre_grupo,
        },{
            where: {
                grupoId: grupoId
            }
        }).then(group => {
            //res.json(group);
            res.json({
                status: true,
                message: 'Grupo Actualizado con ??xito',
                data: group
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.deleteGroup = async (req, res) => {
    const { grupoId } = req.params;
    try {
        const grupo = await Grupo.findByPk(grupoId);
        if (grupo === null) {
            res.json({
                status: false,
                message: 'Grupo no encontrado',
            });
        } else {
            grupo.estado = "E";
            grupo.save();
            res.json({
                status: true,
                message: 'Grupo eliminado',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}