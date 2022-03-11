'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("quizzplayers", {
      fields: ['cuestionarioId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_cuestionarios_player_cuestionarioId',
      references: {
        table: "cuestionarios", // Target model
        field: "cuestionarioId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "quizzplayers", // Source model
      "fk_cuestionarios_player_cuestionarioId" // key to remove
    );
  }
};
