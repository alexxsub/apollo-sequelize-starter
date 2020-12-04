module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
         title: 'The Awakening',
         author: 'Kate Chopin',
        },
        {
        title: 'City of Glass',
        author: 'Paul Auster',
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  }
};