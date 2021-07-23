const { Sequelize, DataTypes } = require('sequelize')

/* Para informações extras vá para o model/petDb.js linha 25 */

/* PARA USAR O MYSQL descomente o trexo de código abaixo, preencha as variaveis
e comente o código do sqlite   */

/*
const database = 'mydb'
const login = 'wellyson'
const senha = '1231950'
const seuHost = "localhost"

const sequelize = new Sequelize(database, login, senha, {
  host: seuHost,
  dialect: 'mysql'
})
*/

/*Se quiser mudar pro mysql comente o trexo de codigo abaixo*/
const sequelize = new Sequelize('sqlite:memory:')
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  DataTypes: DataTypes
}