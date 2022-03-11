'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("quizzplayers", {
      fields: ['jugadorId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_jugadores_cuest_jugadorId',
      references: {
        table: "jugadores", // Target model
        field: "jugadorId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "quizzplayers", // Source model
      "fk_jugadores_cuest_jugadorId" // key to remove
    );
  }
};
