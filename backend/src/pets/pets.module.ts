import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pet } from "./entities/pet.entity";
import { PetsController } from "./pets.controller";
import { PetsService } from "./pets.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pet])],
    controllers: [PetsController],
    providers: [PetsService],
})
export class PetsModule {}