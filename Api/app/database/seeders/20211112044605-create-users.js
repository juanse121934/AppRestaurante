'use strict';

const { users } = require('../../models');
const bcrypt = require('bcrypt');
const auth = require('../../../config/auth')
const faker = require(`faker`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let users = [
      { username: 'Carlos', firts_name: 'Carlos', second_name: 'Carlos', surname: 'Carlos', second_surname: 'Carlos', phone: faker.phone.phoneNumber(), email: 'carlos@carlos.com', image: faker.image.image(), password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)).toString(), created_at: new Date(), updated_at: new Date() },
      { username: 'Giovanny', firts_name: 'Giovanny', second_name: 'Giovanny', surname: 'Giovanny', second_surname: 'Giovanny', phone: faker.phone.phoneNumber(), email: 'giovanny@giovanny.com', image: faker.image.image(), password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)).toString(), created_at: new Date(), updated_at: new Date() },
      { username: 'Gualtero', firts_name: 'Gualtero', second_name: 'Gualtero', surname: 'Gualtero', second_surname: 'Gualtero', phone: faker.phone.phoneNumber(), email: 'gualtero2@gualtero.com', image: faker.image.image(), password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)).toString(), created_at: new Date(), updated_at: new Date() },
      {
        username: 'Londoño', firts_name: 'Londoño', second_name: 'Londoño', surname: 'Londoño', second_surname: 'Londoño', phone: faker.phone.phoneNumber(), email: 'londono@londono.com', image: faker.image.image(),
        password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)).toString(), created_at: new Date(), updated_at: new Date()
      }
    ]

    queryInterface.bulkInsert('users',users ,{})
  },




  down: async (queryInterface, Sequelize) => {
   
    return Promise.all([
      
      queryInterface.bulkDelete('users', null, {}),
    ])
  }
};
