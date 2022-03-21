const { Jugador, Grupo, sequelize } = require('../models/index');

exports.getPlayerByPlayerName = async (req, res) => {
    const { player_name } = req.params;
    
    try {
        const player = await Jugador.findOne({
            attributes: { exclude: ['grupoId', 'estado', 'createdAt', 'updatedAt'] },
            where: { estado: 'A', player_name: sequelize.where(
                sequelize.fn('lower', sequelize.col('player_name')), 
                player_name.toLowerCase()
              ) },
            include: {
                model: Grupo,
                as: 'grupo',
                attributes: ['grupoId', "nombre_grupo"],
                where: { estado: 'A' },
            }
        });
        if (player === null) {
            res.json({
                status: false,
                message: `No se encontró el estudiante con nombre de usuario: ${player_name}`,
            });
        } else {
            res.json({
                status: true,
                message: 'Estudiante encontrado',
                data: player
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.createPlayer = (req, res) => {
    try {
        const { grupoId, nombre, apellido, player_name } = req.body;
        Jugador.create({
            grupoId: grupoId,
            nombre: nombre,
            apellido: apellido,
            player_name: player_name,
        }).then(p => {
            if(p) {
                res.json({
                    status: true,
                    message: 'Estadiante creado con éxito',
                    data: p 
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getFullPlayerByUserId = async (req, res) => {
    const { userId } = req.params;
    
    try {
        const players = await Jugador.findAll({
            attributes: { exclude: ['grupoId', 'estado', 'createdAt', 'updatedAt'] },
            where: { estado: 'A' },
            include: {
                model: Grupo,
                as: 'grupo',
                attributes: ['grupoId', "nombre_grupo"],
                where: { estado: 'A', userId: userId  },
            }
        });
        res.json(players);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.updatePlayer = async (req, res) => {
    const { jugadorId } = req.params;
    try {
        const estudiante = await Jugador.findByPk(jugadorId);
        if (estudiante === null) {
            res.json({
                status: false,
                message: 'Estudiante no encontrado',
            });
        } else {
            const { grupoId, nombre, apellido, player_name } = req.body;
            estudiante.grupoId = grupoId;
            estudiante.nombre = nombre;
            estudiante.apellido = apellido;
            estudiante.player_name = player_name;
            estudiante.save();
            res.json({
                status: true,
                message: 'Estudiante actualizado con éxito',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.deletePlayer = async (req, res) => {
    const { jugadorId } = req.params;
    try {
        const estudiante = await Jugador.findByPk(jugadorId);
        if (estudiante === null) {
            res.json({
                status: false,
                message: 'Estudiante no encontrado',
            });
        } else {
            estudiante.estado = "E";
            estudiante.save();
            res.json({
                status: true,
                message: 'Estudiante eliminado',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}