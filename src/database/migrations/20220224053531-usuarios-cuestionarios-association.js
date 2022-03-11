'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("cuestionarios", {
      fields: ['userId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_cuestionarios_userId',
      references: {
        table: "usuarios", // Target model
        field: "userId", // key in Target model
      },
      /* onUpdate: "CASCADE",
      onDelete: "RESTRICT", */
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "cuestionarios", // Source model
      "fk_cuestionarios_userId" // key to remove
    );
  }
};
