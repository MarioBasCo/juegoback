'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizzPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.QuestionAnswer, {foreignKey: 'quizzPlayerId', as: 'respuestas'})
      this.belongsTo(models.Cuestionario, {foreignKey: 'cuestionarioId', as: 'cuestionario'})
    }
  }
  QuizzPlayer.init(
    {
      quizzPlayerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      jugadorId: {
        type: DataTypes.INTEGER,
      },
      cuestionarioId: {
        type: DataTypes.INTEGER,
      },
      calificacion: {
        type: DataTypes.FLOAT,
        defaultValue: 0
      },
      comodin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
    }, {
    sequelize,
    tableName: "quizzplayers",
    modelName: 'QuizzPlayer',
  });
  return QuizzPlayer;
};