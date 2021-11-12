'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return Promise.all([
  
      queryInterface.bulkInsert('roles', [
        { role: 'admin', created_at: new Date(), updated_at: new Date() },
        {role: 'user', created_at: new Date(), updated_at: new Date()}
      ], {}),
      
      queryInterface.bulkInsert('roles_users', [
        { user_id:1,role_id:1, created_at: new Date(), updated_at: new Date() },
        { user_id: 2, role_id: 2, created_at: new Date(), updated_at: new Date()},
        { user_id: 3, role_id: 2, created_at: new Date(), updated_at: new Date() },
        { user_id: 1, role_id: 2, created_at: new Date(), updated_at: new Date()}
      ],{})
])

  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkDelete('roles', null, {}),
      queryInterface.bulkDelete('roles_users', null, {})
      
    ]);
  }
};
