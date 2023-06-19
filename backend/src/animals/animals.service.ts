import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateAnimalDto } from './dto/create-animal.dto'
import { UpdateAnimalDto } from './dto/update-animal.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Animal } from './entities/animal.entity'
import { PaginationQueryDto } from 'src/customers/dto/pagination-query.dto'
import { Customer } from 'src/customers/entities/customer.entity'

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal)
    private animalModel: typeof Animal
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const animal = await this.animalModel.create(createAnimalDto)
    await animal.save()
    return animal.id
  }

  async findAll({ limit = 10, page = 1 }: PaginationQueryDto) {
    const animals = await this.animalModel.findAll({
      limit,
      offset: (page - 1) * limit,
    })
    return animals
  }

  async findOne(id: number) {
    const animal = await this.animalModel.findOne({
      where: { id },
      include: [Customer],
    })
    if (!animal) throw new NotFoundException()
    return animal
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.findOne(id)
    Object.assign(animal, { ...updateAnimalDto })
    await animal.save()
  }

  async remove(id: number) {
    const animal = await this.findOne(id)
    await animal.destroy()
  }
}
