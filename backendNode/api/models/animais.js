'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Animais.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    raca: DataTypes.STRING,
    tipo: DataTypes.STRING,
    nome_dono: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animais',
  });
  return Animais;
};