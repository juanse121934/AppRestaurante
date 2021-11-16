'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postres extends Model {
    
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { as: 'autor', foreignKey: 'user_id' })
    }
  };
  postres.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg:'El postre debe tener un nombre'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg:'El postre debe tener una description',
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: {
          msg:'El postre debe tener una precio'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        msg:'El postre debe tener una imagen'
      }
    },
    punctuation: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'postres',
  });
  return postres;
};