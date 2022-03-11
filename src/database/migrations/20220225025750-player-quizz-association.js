'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("questionanswers", {
      fields: ['quizzPlayerId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_quizz_jugador_asignado',
      references: {
        table: "quizzplayers", // Target model
        field: "quizzPlayerId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "questionanswers", // Source model
      "fk_quizz_jugador_asignado" // key to remove
    );
  }
};
