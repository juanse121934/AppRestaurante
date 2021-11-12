'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
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
          msg: 'Este nombre de usuario ya existe'
        }
      }
    },
    firts_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg:'El nombre solo puede contener letras'
        },
        len: {
          args: [2, 255],
          msg:"El nombre debe tener minimo 2 caracteres"
        }
      }
    },
    second_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "El Apellido solo puede contener letras"
        },
        len: {
          args: [2, 255],
          msg: 'El Nombre debe tener minimo 2 caracteres'
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        },
        len: {
          args: [2, 255],
          msg: 'El Apellido debe tener minimo 2 caracteres'
        }
      }
    },
    second_surname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        },
        len: {
          args: [2, 255],
          msg: 'El Apellido debe tener minimo 2 caracteres'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 255],
          msg: 'El Numero debe tener minimo 10 digitos'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'El Email debe ser valido'
        }
      }
    },
    image: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 255],
          msg: 'La contraseña debe tener minimo 10 caracteres'
        }
      }
    },
   
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};