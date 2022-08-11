'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Skill',
      tableName: 'skills'
    }
  )
  return Skill
}
