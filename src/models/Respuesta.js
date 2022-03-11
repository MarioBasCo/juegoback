'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Respuesta.belongsTo(models.Pregunta);
      //models.Pregunta.hasMany(Respuesta)
    }
  }

  Respuesta.init(
    {
      respuestaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      preguntaId: {
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
    }, {
      sequelize,
      tableName: "respuestas",
      modelName: 'Respuesta',
    }
  );
  
  return Respuesta;
};