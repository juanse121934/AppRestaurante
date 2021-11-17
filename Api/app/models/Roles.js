'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    
    static associate(models) {
      // define association here
      this.belongsToMany(models.users, { as: "Users", foreignKey: 'role_id', through: 'roles_users' })
    }
  };
  roles.init({
    role: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};