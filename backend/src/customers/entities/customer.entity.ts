import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript'

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

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
