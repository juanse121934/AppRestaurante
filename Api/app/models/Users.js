'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {
      // define association here
      this.hasMany(models.posts, { as: "posts", foreignKey: 'user_id' });
      this.hasMany(models.postres, { as: "postres", foreignKey: 'user_id' });
      this.hasMany(models.platos, { as: "platos", foreignKey: 'user_id' });
      this.belongsToMany(models.roles, { as: "roles", foreignKey:'user_id',through:'roles_users'})
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

  //** VERIFICO EL ROL DEL USUARIO */
  
  users.isAdmin = function (roles) {
    let tmp = [];
    roles.forEach(role => tmp.push(role.role));
    
    return tmp.includes('admin')
  }
  return users;
};