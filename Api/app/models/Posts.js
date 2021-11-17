'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    
    static associate(models) {
      // define association here
     this.belongsTo(models.users, {as:'Autor', foreignKey:'user_id'})
    }
  };
  posts.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El post debe tener un titulo'
        }
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El post debe tener un mensaje'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};