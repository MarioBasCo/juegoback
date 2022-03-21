'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Respuesta, {foreignKey: 'respuestaId', as: 'respuestas'});
    }
  }
  QuestionAnswer.init(
    {
      resPlayerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      quizzPlayerId: {
        type: DataTypes.INTEGER,
      },
      preguntaId: {
        type: DataTypes.INTEGER,
      },
      respuestaId: {
        type: DataTypes.INTEGER,
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      },
    }, {
    sequelize,
    tableName: "questionanswers",
    modelName: 'QuestionAnswer',
  });
  return QuestionAnswer;
};