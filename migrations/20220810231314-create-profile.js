"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      about: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projects: {
        type: Sequelize.STRING,
      },
      skillId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "skills",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profiles")
  },
}
