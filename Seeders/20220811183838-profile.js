'use strict'
const falso = require('@ngneat/falso')
const { Skill } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const s = await Skill.findAll({ raw: true })
    let profiles = [...Array(40)].map((_) => {
      let r = Math.floor(Math.random() * s.length)
      return {
        name: falso.randFullName(),
        image: falso.randImg(),
        city: falso.randCity(),
        about: falso.randText({ min: 20, max: 100 }),
        contact: falso.randEmail(),
        rate: falso.randAmount(),
        projects: falso.randJobDescriptor({ min: 1, max: 8 }),
        skillId: s[r].id,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      }
    })
    await queryInterface.bulkInsert('profiles', profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('profiles')
  }
}
