'use strict';

const { users } = require('../../models');
const bcrypt = require('bcrypt');
const auth = require('../../../config/auth')
const faker = require(`faker`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return Promise.all([

      users.create({
        username: 'Carlos',
        firts_name: 'Carlos',
        second_name: 'Carlos',
        surname: 'Carlos',
        second_surname: 'Carlos',
        phone: faker.phone.phoneNumber(),
        email: 'carlos@carlos.com',
        image: faker.image.image(),
        password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)),
        posts: [
          {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }]
      }, {
        include: 'posts'
      
      }),

      users.create({
        username: 'Giovanny',
        firts_name: 'Giovanny',
        second_name: 'Giovanny',
        surname: 'Giovanny',
        second_surname: 'Giovanny',
        phone: faker.phone.phoneNumber(),
        email: 'carlos1@carlos.com',
        image: faker.image.image(),
        password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)),
        posts: [
          {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          },
          {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }
        ]
      }, {
        include: 'posts'
      }),

      users.create({
        username: 'CarlosG',
        firts_name: 'CarlosG',
        second_name: 'CarlosG',
        surname: 'CarlosG',
        second_surname: 'CarlosG',
        phone: faker.phone.phoneNumber(),
        email: 'carlos2@carlos.com',
        image: faker.image.image(),
        password: bcrypt.hashSync('12345678912', Number.parseInt(auth.rounds)).toString(),
        posts: [
          {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }, {
            title: faker.lorem.slug(),
            body: faker.lorem.sentences(),
          }
        ]
      }, {
        include: 'posts'
      }),

    ]);
  },

  down: async (queryInterface, Sequelize) => {
   
    return Promise.all([
      queryInterface.bulkDelete('posts', null, {}),
      queryInterface.bulkDelete('users', null, {}),
    ])
  }
};
