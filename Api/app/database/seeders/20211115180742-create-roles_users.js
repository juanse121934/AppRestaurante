'use strict';


const { users } = require('../../models')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let union = [];

    let user = await users.findAll();


    user.forEach(user => {
  
      union.push({
        user_id: user.id,
        role_id: faker.datatype.number({ min: 1, max: 4 }),
        created_at: new Date(),
        updated_at: new Date()
      })
})

    

      queryInterface.bulkInsert('roles_users',union , {})
   
   
  },

  down: async (queryInterface, Sequelize) => {
   
    return Promise.all([
     
      queryInterface.bulkDelete('roles_users', null, {})

    ]);

  }
};
