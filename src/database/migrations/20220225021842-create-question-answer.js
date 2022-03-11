'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questionanswers', {
      resPlayerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quizzPlayerId: {
        type: Sequelize.INTEGER,
      },
      preguntaId: {
        type: Sequelize.INTEGER,
      },
      respuestaId: {
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
    await queryInterface.dropTable('questionanswers');
  }
};