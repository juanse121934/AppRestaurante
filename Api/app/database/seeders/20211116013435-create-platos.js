'use strict';
const faker = require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let platos = [
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
      { name: faker.commerce.productName(), description: faker.lorem.paragraphs(), price: faker.commerce.price(2, 1000, 1), image: faker.image.avatar(), punctuation: faker.datatype.float({ min: 10, max: 100, precision: .1 }), user_id: faker.datatype.number({ min: 1, max: 4 }), created_at: new Date(), updated_at: new Date() },
    ];

    queryInterface.bulkInsert('platos', platos, {})
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkDelete('platos', null, {}),
    ])
  }
};
