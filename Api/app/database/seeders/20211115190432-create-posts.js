'use strict';


const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    let post = [
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      {title: faker.lorem.slug(),body: faker.lorem.sentences(),user_id: faker.datatype.number({ min: 1, max: 4 }),created_at: new Date(),updated_at: new Date()},
      
    ];


    queryInterface.bulkInsert('posts', post, {})


  },

  down: async (queryInterface, Sequelize) => {


    return Promise.all([

      queryInterface.bulkDelete('posts', null, {}),
    ])

  }
};