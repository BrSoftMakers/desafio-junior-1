"use strict";
console.log("Rafael e muito legal");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Buddy",
          age: 1,
          race_id: 11,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jake",
          age: 2,
          race_id: 11,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yuki",
          age: 2,
          race_id: 11,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Luke",
          age: 1,
          race_id: 11,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mel",
          age: 7,
          race_id: 12,
          user_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jade",
          age: 12,
          race_id: 19,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Duda",
          age: 14,
          race_id: 14,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Max",
          age: 5,
          race_id: 15,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jorge",
          age: 1,
          race_id: 3,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
