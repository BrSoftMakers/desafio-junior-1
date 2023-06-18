import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CustomerAnimal } from './entities/customer-animal.entity'

@Injectable()
export class CustomerAnimalService {
  constructor(
    @InjectModel(CustomerAnimal)
    private customerAnimalModel: typeof CustomerAnimal
  ) {}

  async create(customerId: number, animalId: number) {
    const customerAnimal = await this.customerAnimalModel.create({
      customerId,
      animalId,
    })
    await customerAnimal.save()
  }

  async findOne(customerId: number, animalId: number) {
    const customerAnimal = await this.customerAnimalModel.findOne({
      where: {
        customerId,
        animalId,
      },
    })
    if (!customerAnimal) throw new NotFoundException()
    return customerAnimal
  }

  async remove(customerId: number, animalId: number) {
    const customerAnimal = await this.findOne(customerId, animalId)
    await customerAnimal.destroy()
  }
}
