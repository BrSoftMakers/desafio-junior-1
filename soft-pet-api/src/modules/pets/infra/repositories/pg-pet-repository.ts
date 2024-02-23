<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../data/contracts/pet-repository";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { CreatePetData, Pet, UpdatePetData } from "../../domain/models";
import { Filter, Page } from "src/modules/chore/models";

@Injectable()
export class pgPetRepository implements PetRepository {
    constructor(private prismaClient: PrismaService) { }

    async create (pet: CreatePetData): Promise<void> {        
        await this.prismaClient.pet.create({
            data: {
                name: pet.name,
                breed: pet.breed,
                birth: pet.birth,
                PetType: {
                    connect: { type: pet.petType}
                },
                ownerName: pet.ownerName,
                ownerPhone: pet.ownerPhone
            }
        })
    };

    async getAllPets(filter: Filter): Promise<Page<Pet>> {
        const pets = await this.prismaClient.pet.findMany({
            ...filter.query,
        })
        const count = await this.prismaClient.pet.count({
            where: filter.where
        })

        return Page.create(count, pets, filter)
    }

    async getPetById(id: string): Promise<Pet>{
        const pet = await this.prismaClient.pet.findFirst({
            where: {
                id: id
            }
        })

        return pet
    }

    async updatePet(id: string, updatePetData: UpdatePetData): Promise<Pet> {
        const { petType, ...updatPetData } = updatePetData
        
        const type = await this.prismaClient.petType.findUnique({
            where: {
                type: petType
            }
        })

        const pet = await this.prismaClient.pet.update({
            where: {
                id: id
            },
            data: {
                ...updatPetData,
                PetType: { 
                    connect: {
                        id: type.id,
                        type: type.type
                    }
                }
            }
        })
        
        return pet
    }

    async deletePet(id: string): Promise<void> {
        await this.prismaClient.pet.delete({
            where: {
                id: id
            }
        })
    }
=======
import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../data/contracts/pet-repository";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { CreatePetData, Pet, UpdatePetData } from "../../domain/models";
import { Filter, Page } from "src/modules/chore/models";

@Injectable()
export class pgPetRepository implements PetRepository {
    constructor(private prismaClient: PrismaService) { }

    async create (pet: CreatePetData): Promise<void> {        
        await this.prismaClient.pet.create({
            data: {
                name: pet.name,
                breed: pet.breed,
                birth: pet.birth,
                PetType: {
                    connect: { type: pet.petType}
                },
                ownerName: pet.ownerName,
                ownerPhone: pet.ownerPhone
            }
        })
    };

    async getAllPets(filter: Filter): Promise<Page<Pet>> {
        const pets = await this.prismaClient.pet.findMany({
            ...filter.query,
        })
        const count = await this.prismaClient.pet.count({
            where: filter.where
        })

        return Page.create(count, pets, filter)
    }

    async getPetById(id: string): Promise<Pet>{
        const pet = await this.prismaClient.pet.findFirst({
            where: {
                id: id
            }
        })

        return pet
    }

    async updatePet(id: string, updatePetData: UpdatePetData): Promise<Pet> {
        const { petType, ...updatPetData } = updatePetData
        
        const type = await this.prismaClient.petType.findUnique({
            where: {
                type: petType
            }
        })

        const pet = await this.prismaClient.pet.update({
            where: {
                id: id
            },
            data: {
                ...updatPetData,
                PetType: { 
                    connect: {
                        id: type.id,
                        type: type.type
                    }
                }
            }
        })
        
        return pet
    }

    async deletePet(id: string): Promise<void> {
        await this.prismaClient.pet.delete({
            where: {
                id: id
            }
        })
    }
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}