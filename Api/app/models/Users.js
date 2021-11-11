'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Este nobre de usuario ya existe'
        }
      }
    },
    firts_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg:'El nombre solo puede contener letras'
        }
      }
    },
    second_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        }
      }
    },
    second_surname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        }
      }
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};