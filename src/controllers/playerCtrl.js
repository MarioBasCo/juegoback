const { Jugador, Grupo } = require('../models/index');

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