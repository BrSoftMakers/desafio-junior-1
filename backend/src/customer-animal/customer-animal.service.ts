import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CustomerAnimal } from './entities/customer-animal.entity'
import { CreateCustomerAnimalDto } from './dto/create-customer-animal.dto'
import { DeleteCustomerAnimalDto } from './dto/delete-customer-animal-dto'

@Injectable()
export class CustomerAnimalService {
  constructor(
    @InjectModel(CustomerAnimal)
    private customerAnimalModel: typeof CustomerAnimal
  ) {}

  async create({ animalId, customerId }: CreateCustomerAnimalDto) {
    const customerAnimalExist = await this.findOne(customerId, animalId)
    if (customerAnimalExist) throw new BadRequestException()
    const customerAnimal = await this.customerAnimalModel.create({
      customerId,
      animalId,
    })
    await customerAnimal.save()
  }

  private async findOne(customerId: number, animalId: number) {
    const customerAnimal = await this.customerAnimalModel.findOne({
      where: {
        customerId,
        animalId,
      },
    })
    return customerAnimal
  }

  async remove({ animalId, customerId }: DeleteCustomerAnimalDto) {
    const customerAnimal = await this.findOne(customerId, animalId)
    await customerAnimal.destroy()
  }
}
