import {
  Table,
  Column,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  Model,
} from 'sequelize-typescript'
import { Animal } from 'src/animals/entities/animal.entity'
import { Customer } from 'src/customers/entities/customer.entity'

@Table({ tableName: 'customerAnimal' })
export class CustomerAnimal extends Model<CustomerAnimal> {
  @ForeignKey(() => Customer)
  @Column
  customerId: number

  @ForeignKey(() => Animal)
  @Column
  animalId: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
