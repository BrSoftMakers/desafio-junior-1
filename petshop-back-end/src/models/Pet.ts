import { DataTypes, Model, Optional } from 'sequelize';
import db from './bancoDados';
import User from './User';

interface PetAttributes {
    id: number;
    name: string;
    age: number;
    type: 'cat' | 'dog';
    breed: string;
    ownerId: number;
}

type PetCreationAttributes = Optional<PetAttributes, 'id'>;

class Pet extends Model<PetAttributes, PetCreationAttributes> implements PetAttributes {
    public id!: number;
    public name!: string;
    public age!: number;
    public type!: 'cat' | 'dog';
    public breed!: string;
    public ownerId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Pet.init(
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
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('cat', 'dog'),
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Usar User em vez de 'User'
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: 'Pet',
    }
);

Pet.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });

Pet.sync();

export default Pet;