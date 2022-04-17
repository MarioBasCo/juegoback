'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recuperar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'userId', as: 'usuario'});
    }
  }
  Recuperar.init(
    {
      recoverId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      codigo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tiempo_expiracion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'I'
      },
    }, {
    sequelize,
    tableName: "passwordlog",
    modelName: 'Recuperar',
  });
  return Recuperar;
};