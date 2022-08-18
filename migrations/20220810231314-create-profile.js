'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      about: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      rate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      projects: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('profiles')
  }
}
