"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("skills", "categoryId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "categories",
        key: "id",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("skills", "categoryId")
  },
}
