'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product)
    }
  }
  Category.init({
    name: {
      type:DataTypes.STRING
    },
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Name Category cannot be empty'
      },
      notEmpty:{
        msg: "Name Category cannot be empty"
      }
    }

  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};