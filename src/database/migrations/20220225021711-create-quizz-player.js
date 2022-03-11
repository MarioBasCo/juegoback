'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quizzplayers', {
      quizzPlayerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jugadorId: {
        type: Sequelize.INTEGER,
      },
      cuestionarioId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('quizzplayers');
  }
};