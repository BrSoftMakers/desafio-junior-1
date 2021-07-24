const Sequelize = require('sequelize');
const database = require('../database')

const Pet = database.define('pets', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_dono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero_dono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamp: false
})

Pet.sync({ force: true })

module.exports = Pet

