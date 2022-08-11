"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let profiles = [...Array(40)].map((_) => ({
      name: falso.randFullName(),
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      image: falso.randImg(),
      city: falso.randCity(),
      about: falso.randParagraph(),
      contact: falso.randEmail(),
      rate: falso.randAmount(),
      projects: falso.randJobDescriptor({ min: 1, max: 8 }),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate(),
    }))
    await queryInterface.bulkInsert("profiles", profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles")
  },
}
