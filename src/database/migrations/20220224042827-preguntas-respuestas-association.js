'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("respuestas", {
      fields: ['preguntaId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_respuestas_preguntaId',
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
      "respuestas", // Source model
      "fk_respuestas_preguntaId" // key to remove
    );
  }
};
