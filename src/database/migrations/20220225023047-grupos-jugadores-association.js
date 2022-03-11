'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("jugadores", {
      fields: ['grupoId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_jugadores_grupoId',
      references: {
        table: "grupos", // Target model
        field: "grupoId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "jugadores", // Source model
      "fk_jugadores_grupoId" // key to remove
    );
  }
};
