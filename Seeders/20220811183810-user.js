'use strict'
const falso = require('@ngneat/falso')
const { Profile } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const p = await Profile.findAll({ raw: true })
    let users = [...Array(47)].map((_, i) => ({
      username: falso.randUserName(),
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      city: falso.randCity(),
      isHunter: falso.randBoolean(),
      profileId: p[i].id,
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
