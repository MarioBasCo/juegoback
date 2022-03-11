'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("questionanswers", {
      fields: ['preguntaId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_preguntas_jugador',
      references: {
        table: "preguntas", // Target model
        field: "preguntaId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "questionanswers", // Source model
      "fk_preguntas_jugador" // key to remove
    );
  }
};
