import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  Model,
  BelongsToMany,
} from 'sequelize-typescript'
import { AnimalTypes } from '../types/enums/enums'
import { Customer } from 'src/customers/entities/customer.entity'
import { CustomerAnimal } from 'src/customer-animal/entities/customer-animal.entity'

@Table({ tableName: 'animals' })
export class Animal extends Model<Animal> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  })
  id: number

  @Column({
    allowNull: false,
  })
  name: string

  @Column({
    allowNull: false,
  })
  age: number

  @Column({
    type: DataType.ENUM(...Object.values(AnimalTypes)),
    allowNull: true,
  })
  type: AnimalTypes

  @Column({
    allowNull: false,
  })
  race: string

  @BelongsToMany(() => Customer, () => CustomerAnimal)
  customers: Customer[]

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
