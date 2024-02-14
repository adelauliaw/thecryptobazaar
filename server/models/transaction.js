'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Cart, {foreignKey: "cartId"})
      Transaction.belongsTo(models.Customer, {foreignKey: "customerId"})
      Transaction.belongsTo(models.Product, {foreignKey: "productId"})
    }
  }
  Transaction.init({
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Cart ID cannot be empty'
        }
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Customer ID cannot be empty'
        }
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product ID cannot be empty'
        }
      }
    },
    totalItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Total item cannot be empty'
        }
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Total price cannot be empty'
        }
      }
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Order date cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  return Transaction;
};