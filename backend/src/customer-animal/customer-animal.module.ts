import { Module } from '@nestjs/common'
import { CustomerAnimalService } from './customer-animal.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { CustomerAnimal } from './entities/customer-animal.entity'
import { CustomerAnimalController } from './customer-animal.controller'

@Module({
  imports: [SequelizeModule.forFeature([CustomerAnimal])],
  controllers: [CustomerAnimalController],
  providers: [CustomerAnimalService],
})
export class CustomerAnimalModule {}
