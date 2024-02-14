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
    }
  }
  Transaction.init({
    cartId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    totalItem: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    orderDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};