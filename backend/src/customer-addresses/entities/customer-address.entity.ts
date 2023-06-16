import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript'
import { Customer } from 'src/customers/entities/customer.entity'

Table({ tableName: 'customerAddresses' })
export class CustomerAddress extends Model<CustomerAddress> {
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
  zipCode: string

  @Column({
    allowNull: false,
  })
  street: string

  @Column({
    allowNull: false,
  })
  number: string

  @Column({
    allowNull: false,
  })
  state: string

  @Column({
    allowNull: false,
  })
  city: string

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number

  @BelongsTo(() => Customer, 'customerId')
  customer: Customer

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
