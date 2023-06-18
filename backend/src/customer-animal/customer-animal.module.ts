import { Module } from '@nestjs/common'
import { CustomerAnimalService } from './customer-animal.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { CustomerAnimal } from './entities/customer-animal.entity'

@Module({
  imports: [SequelizeModule.forFeature([CustomerAnimal])],
  providers: [CustomerAnimalService],
})
export class CustomerAnimalModule {}
