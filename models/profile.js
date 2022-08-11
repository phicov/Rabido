"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.hasOne(models.User, { foreignKey: "profileId" })
      Profile.belongsTo(models.Skill, { foreignKey: "skillId" })
    }
  }
  Profile.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about: DataTypes.STRING,
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projects: DataTypes.STRING,
      skillId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "skills",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
    }
  )
  return Profile
}
