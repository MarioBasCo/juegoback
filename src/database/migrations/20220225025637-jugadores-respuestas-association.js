'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("questionanswers", {
      fields: ['respuestaId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_respuestas_jugador',
      references: {
        table: "respuestas", // Target model
        field: "respuestaId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "questionanswers", // Source model
      "fk_respuestas_jugador" // key to remove
    );
  }
};
