"use strict";
console.log("Rafael e muito legal");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "races",
      [
        {
          name: "Pastor Alemão",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Akita",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Beagle",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Border Collie",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Chow Chow",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Corgi",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Buldogue Francês",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Husky",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Golden Retriever",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Labrador",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Spitz Alemão",
          type: "dog",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maine Coon",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Persa",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Siamês",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sphynx",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Havana",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Singapura",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Devon Rex",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ragdoll",
          type: "cat",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("races", null, {});
  },
};
