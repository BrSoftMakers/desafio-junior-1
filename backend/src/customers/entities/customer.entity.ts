import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasOne,
} from 'sequelize-typescript'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'

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

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
