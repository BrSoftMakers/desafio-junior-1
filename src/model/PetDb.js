const db = require('../database/database')

const PetDb = db.sequelize.define('PetDbs', {
  nome: {
    type: db.DataTypes.STRING
  },
  idade: {
    type: db.DataTypes.INTEGER
  },
  pet: {
    type: db.DataTypes.STRING
  },
  raca: {
    type: db.DataTypes.STRING
  },
  nomeDono: {
    type: db.DataTypes.STRING
  },
  contatoDono: {
    type: db.DataTypes.STRING
  }
});
module.exports = PetDb

//Comentar linha 26 após a criação da tabela, pois ela recria a tabela
PetDb.sync({ force: true })