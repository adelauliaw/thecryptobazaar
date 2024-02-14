'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Product.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Product name cannot be empty'
        },
        notEmpty: {
          msg: "Product name cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description cannot be empty'
        },
        notEmpty: {
          msg: "Description cannot be empty"
        }
      }
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Tag cannot be empty'
        },
        notEmpty: {
          msg: "Tag cannot be empty"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price cannot be empty'
        },
        notEmpty: {
          msg: "Price cannot be empty"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Stock cannot be empty'
        },
        notEmpty: {
          msg: "Stock cannot be empty"
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image URL cannot be empty'
        },
        notEmpty: {
          msg: "Image URL cannot be empty"
        }
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category ID cannot be empty'
        },
        notEmpty: {
          msg: "Category ID cannot be empty"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID cannot be empty'
        },
        notEmpty: {
          msg: "User ID cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Assuming you want a default value for status
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
