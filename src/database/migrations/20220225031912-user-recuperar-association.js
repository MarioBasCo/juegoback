'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("passwordlog", {
      fields: ['userId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_usuario_recover_pass',
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
      "passwordlog", // Source model
      "fk_usuario_recover_pass" // key to remove
    );
  }
};
