import Sequelize, { Model } from 'sequelize';

export default class Animal extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field Name should be beetwen 3 and 255 characters :)',
          },
        },
      },
      tipo: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field type should be beetwen 3 and 255 characters :)',
          },
        },
      },
      raca: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field raca should be beetwen 3 and 255 characters :)',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Invalid Age :)',
          },
        },
      },contato: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Dono sem',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Endereco sem',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
