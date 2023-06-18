import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasOne,
  BelongsToMany,
} from 'sequelize-typescript'
import { Animal } from 'src/animals/entities/animal.entity'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'
import { CustomerAnimal } from 'src/customer-animal/entities/customer-animal.entity'

@Table({ tableName: 'customers' })
export class Customer extends Model<Customer> {
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
  fullName: string

  @Column({
    allowNull: false,
    unique: true,
  })
  email: string

  @Column({
    allowNull: false,
  })
  phone: string

  @HasOne(() => CustomerAddress)
  customerAddress: CustomerAddress

  @BelongsToMany(() => Animal, () => CustomerAnimal)
  animals: Animal[]

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
