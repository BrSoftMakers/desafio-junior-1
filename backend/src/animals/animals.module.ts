import { Module } from '@nestjs/common'
import { AnimalsService } from './animals.service'
import { AnimalsController } from './animals.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Animal } from './entities/animal.entity'

@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
