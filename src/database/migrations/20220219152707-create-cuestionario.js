'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cuestionarios', {
      cuestionarioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      num_preguntas: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      fecha_disp: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(1),
        defaultValue: 'I'
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
    await queryInterface.dropTable('cuestionarios');
  }
};