"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let skills = [...Array(6)].map((_) => ({
      name: falso.randJobTitle(),
      category: falso.randJobType(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate(),
    }))
    await queryInterface.bulkInsert("skills", skills)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("skills")
  },
}
