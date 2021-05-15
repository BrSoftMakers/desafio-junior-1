"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Animals",
      [
        {
          nome: "Paçoca",
          idade: "3",
          raca: "Shihtzu",
          tipo: "cachorro",
          nome_dono: "Alan",
          telefone: "9 999999999",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Tuty",
          idade: "16",
          raca: "Persa",
          tipo: "gato",
          nome_dono: "Beatriz",
          telefone: "9 888888888",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Wesley",
          idade: "5",
          raca: "Maltes",
          tipo: "cachorro",
          nome_dono: "Priscila",
          telefone: "9 333888333",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Animals", null, {});
  },
};
