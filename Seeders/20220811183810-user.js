"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [...Array(40)].map((_) => ({
      username: falso.randUserName(),
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      city: falso.randCity(),
      isHunter: falso.randBoolean(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate(),
    }))
    await queryInterface.bulkInsert("users", users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users")
  },
}
