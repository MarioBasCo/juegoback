'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("preguntas", {
      fields: ['cuestionarioId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_preguntas_cuestionarioId',
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
      "preguntas", // Source model
      "fk_preguntas_cuestionarioId" // key to remove
    );
  }
};
