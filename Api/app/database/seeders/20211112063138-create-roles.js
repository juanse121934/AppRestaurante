'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return Promise.all([
  
      queryInterface.bulkInsert('roles', [
        { role: 'admin', created_at: new Date(), updated_at: new Date() },
        {role: 'user', created_at: new Date(), updated_at: new Date()},
        {role: 'vendedor', created_at: new Date(), updated_at: new Date()},
        {role: 'domicilio', created_at: new Date(), updated_at: new Date()},
      ], {}),
])

  },

  down: async (queryInterface, Sequelize) => {

    return Promise.all([

      queryInterface.bulkDelete('roles', null, {}),
      
      
    ]);
  }
};
