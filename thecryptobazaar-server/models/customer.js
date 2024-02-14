'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Cart)
      Customer.hasMany(models.Transaction)
    }
  }
  Customer.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: {
        msg:"Email already in used"
      },
      validate:{
        notNull:{
          msg: "Email cannot be empty"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: "Password cannot be empty"
        },
        notEmpty:{
          msg: "Password cannot be empty"
        }
      }
    },
    role: {
      type:DataTypes.STRING,
    },
    address: {
      type:DataTypes.STRING,
    },
    phoneNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Phone Number cannot be empty"
        },
        notEmpty: {
          msg: "Phone Number cannot be empty"
        }
      }
    },
    gender: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};