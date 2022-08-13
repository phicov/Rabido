'use strict'
const { Model, ForeignKeyConstraintError } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.hasMany(models.Profile, { foreignKey: 'skillId' })
      Skill.belongsTo(models.Category, { foreignKey: 'categoryId' })
    }
  }
  Skill.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Skill',
      tableName: 'skills'
    }
  )
  return Skill
}
