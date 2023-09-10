import { DataTypes, Model } from 'sequelize';
import User from './User';
import db from './bancoDados';

export interface AddressAttributes {
    id_address?: number;
    id_user: number;
    cep: string;
    street: string;
    city: string;
    state: string;
}

class Address extends Model<AddressAttributes> implements AddressAttributes {
    public id_address!: number;
    public id_user!: number;
    public cep!: string;
    public street!: string;
    public city!: string;
    public state!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Address.init(
    {
        id_address: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: 'addresses',
    }
);

Address.belongsTo(User, { foreignKey: 'id_user', as: 'user', targetKey: 'id' });
User.hasMany(Address, { foreignKey: 'id_user', as: 'addresses' });

Address.sync();

export default Address;