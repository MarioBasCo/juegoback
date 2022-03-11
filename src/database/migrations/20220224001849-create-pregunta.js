'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('preguntas', {
      preguntaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cuestionarioId: {
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('preguntas');
  }
};