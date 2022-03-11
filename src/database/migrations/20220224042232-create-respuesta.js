'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('respuestas', {
      respuestaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preguntaId: {
        type: Sequelize.INTEGER,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      estado: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('respuestas');
  }
};