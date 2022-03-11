'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint("grupos", {
      fields: ['userId'], // field name of the foreign key
      type: 'FOREIGN KEY',
      name: 'fk_grupos_userId',
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
      "grupos", // Source model
      "fk_grupos_userId" // key to remove
    );
  }
};
