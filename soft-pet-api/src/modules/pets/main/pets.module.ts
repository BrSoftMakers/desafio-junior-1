<<<<<<< HEAD
import { Module } from "@nestjs/common";
import { PetsController } from "../presentation/controllers/pets.controller";
import { PetRepository, PetTypeRepository } from "../data/contracts";
import { pgPetRepository } from "../infra/repositories/pg-pet-repository";
import { CreatePet, DeletePet, GetPetById, GetPetType, GetPets, UpdatePet } from "../domain/usecases";
import { CreatePetService, DeletePetService, GetPetByIdService, GetPetsService, UpdatePetService } from "../data/services";
import { PrismaModule } from "src/modules/prisma/prisma.module";
import { GetPetTypeService } from "../data/services/get-pet-type.service";
import { pgPetTypeRepository } from "../infra/repositories";

@Module({
    controllers: [PetsController],
    providers: [
        { provide: PetRepository, useClass: pgPetRepository },
        { provide: CreatePet, useClass: CreatePetService },
        { provide: GetPets, useClass: GetPetsService },
        { provide: GetPetById, useClass: GetPetByIdService },
        { provide: UpdatePet, useClass: UpdatePetService },
        { provide: DeletePet, useClass: DeletePetService },

        { provide: PetTypeRepository, useClass: pgPetTypeRepository },
        { provide: GetPetType, useClass: GetPetTypeService }
    ],
    imports: [PrismaModule]
    
=======
import { Module } from "@nestjs/common";
import { PetsController } from "../presentation/controllers/pets.controller";
import { PetRepository, PetTypeRepository } from "../data/contracts";
import { pgPetRepository } from "../infra/repositories/pg-pet-repository";
import { CreatePet, DeletePet, GetPetById, GetPetType, GetPets, UpdatePet } from "../domain/usecases";
import { CreatePetService, DeletePetService, GetPetByIdService, GetPetsService, UpdatePetService } from "../data/services";
import { PrismaModule } from "src/modules/prisma/prisma.module";
import { GetPetTypeService } from "../data/services/get-pet-type.service";
import { pgPetTypeRepository } from "../infra/repositories";

@Module({
    controllers: [PetsController],
    providers: [
        { provide: PetRepository, useClass: pgPetRepository },
        { provide: CreatePet, useClass: CreatePetService },
        { provide: GetPets, useClass: GetPetsService },
        { provide: GetPetById, useClass: GetPetByIdService },
        { provide: UpdatePet, useClass: UpdatePetService },
        { provide: DeletePet, useClass: DeletePetService },

        { provide: PetTypeRepository, useClass: pgPetTypeRepository },
        { provide: GetPetType, useClass: GetPetTypeService }
    ],
    imports: [PrismaModule]
    
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}) export class PetsModule {} 