"use strict"
const falso = require("@ngneat/falso")
const { Skill } = require("../models")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const s = await Skill.findAll({ raw: true })
    let profiles = [...Array(200)].map((_) => {
      let r = Math.floor(Math.random() * s.length)
      return {
        name: falso.randFullName(),
        image: falso.randImg(),
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        rate: falso.randAmount({ symbol: "$", min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: s[r].id,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      }
    })
    await queryInterface.bulkInsert("profiles", profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles")
  },
}
