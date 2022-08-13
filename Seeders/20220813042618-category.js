"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Design & Creative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Administrative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Home Repair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Personal Assistance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Development & IT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sales & Marketing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {})
  },
}
