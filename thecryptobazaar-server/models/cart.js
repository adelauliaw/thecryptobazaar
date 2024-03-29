'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Customer, {foreignKey: "customerId"})
      Cart.belongsTo(models.Product, {foreignKey: "productId"})
    }
  }
  Cart.init({
    customerId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: "Customer",
        key: "id"
      }
    },
    productId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: "Product",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};