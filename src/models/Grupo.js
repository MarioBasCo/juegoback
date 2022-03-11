'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Grupo.belongsTo(models.Usuario);
      //models.Usuario.hasMany(Grupo);
      //this.hasMany(models.Jugador);
      this.hasMany(models.Jugador, {foreignKey: 'grupoId', as: 'jugadores'});
    }
  }
  Grupo.init(
    {
      grupoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      nombre_grupo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
  }, {
    sequelize,
    tableName: "grupos",
    modelName: 'Grupo',
  });
  return Grupo;
};