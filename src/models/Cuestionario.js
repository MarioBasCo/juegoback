'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cuestionario extends Model {

    static associate(models) {
      this.belongsTo(models.Usuario, {as: 'usuario', foreignKey: "userId"});
      //Cuestionario.belongsTo(models.Usuario);
      //models.Usuario.hasMany(Cuestionario)
      this.hasMany(models.Pregunta, {as: 'preguntas', foreignKey: "cuestionarioId"})
    }
  }

  Cuestionario.init(
    {
      cuestionarioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigo: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      fecha_disp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      num_preguntas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'I'
      },
    }, {
      sequelize,
      tableName: "cuestionarios",
      modelName: "Cuestionario",
    }
  );

  return Cuestionario;
};