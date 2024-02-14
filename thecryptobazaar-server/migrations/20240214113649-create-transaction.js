'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Carts', // Name of the table
          key: 'id', // Key in the referenced table, assuming it's 'id'
        }
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Customers', // Name of the table
          key: 'id', // Key in the referenced table, assuming it's 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Products', // Name of the table
          key: 'id', // Key in the referenced table, assuming it's 'id'
        }
      },
      totalItem: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};