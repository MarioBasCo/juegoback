'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    static associate(models) {
      this.hasMany(models.Respuesta, {as: "respuestas", foreignKey: "preguntaId"});
    }
  }
  Pregunta.init(
    {
      preguntaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cuestionarioId: {
        type: DataTypes.INTEGER,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
    },
    {
      sequelize,
      tableName: "preguntas",
      modelName: "Pregunta",
    }
  );

  return Pregunta;
};