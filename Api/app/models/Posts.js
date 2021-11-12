'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    
    static associate(models) {
      // define association here
     this.belongsTo(models.users, {as:'autor', foreignKey:'userId'})
    }
  };
  posts.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};