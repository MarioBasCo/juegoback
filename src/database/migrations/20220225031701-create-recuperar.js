'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('passwordlog', {
      recoverid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tiempo_expiracion: {
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
    await queryInterface.dropTable('passwordlog');
  }
};