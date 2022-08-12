"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("profiles", "skillId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "skills",
        key: "id",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("profiles", "skillId")
  },
}
