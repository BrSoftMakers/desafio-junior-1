import { DataTypes, Model, Optional } from 'sequelize';
import Address from './Address';
import db from './bancoDados';

// Definindo a interface para os atributos de User
export interface UserAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    birthday: Date;
    isAdmin: boolean;
}

// Definindo a interface para os atributos de criação de User
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public password!: string;
    public birthday!: Date;
    public isAdmin!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Inicializando o modelo User
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false, // Por padrão, um usuário não é um administrador
        },
    },
    {
        sequelize: db, // Passando a instância do banco de dados Sequelize
        modelName: 'users', // Nome da tabela no banco de dados
    }
);

// Adicione um gancho (hook) beforeDestroy para excluir endereços associados antes de excluir o usuário
User.beforeDestroy(async (user, options) => {
    // Importe o modelo Address aqui se ainda não estiver importado
    const Address = require('./Address').default;

    // Exclua os endereços associados a este usuário
    await Address.destroy({
        where: {
            id_user: user.id,
        },
    });
});

User.sync();

export default User;