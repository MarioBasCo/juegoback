'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    static associate(models) {
      this.belongsTo(models.Grupo, {foreignKey: 'grupoId', as: 'grupo'});
    }
  }
  Jugador.init(
    {
      jugadorId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      grupoId: {
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      player_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
    }, {
    sequelize,
    tableName: "Jugadores",
    modelName: 'Jugador',
  });
  return Jugador;
};