"use strict";
console.log("Rafael e muito legal");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Raphael",
          telephone: "(11) 91234-1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Diego",
          telephone: "(11) 91234-1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Edson",
          telephone: "(11) 91234-1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Santana",
          telephone: "(11) 91234-1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Felipe",
          telephone: "(11) 91234-1234",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
