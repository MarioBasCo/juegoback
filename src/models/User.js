'use strict';
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      //this.hasMany(models.Recuperar, {foreingKey: 'userId'});
      //this.hasMany(models.Recuperar, { foreingKey: 'userId', as: 'passwordLog' });
      //this.hasMany(models.Grupo, {foreingKey: "userId"});
      //models.Recuperar.hasMany(Usuario,{foreingKey: "userId"});
    }
  }

  Usuario.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fechanaci: {
        type: DataTypes.DATE,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      clave: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
      }
    }, {
      sequelize,
      tableName: "usuarios",
      modelName: 'Usuario',
    }
  );

  return Usuario;
};