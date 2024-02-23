import { Injectable } from "@nestjs/common";
import { PetTypeRepository } from "../../data/contracts";
import { PetType } from "../../domain/models";
import { PrismaService } from "src/modules/prisma/prisma.service";

@Injectable()
export class pgPetTypeRepository implements PetTypeRepository {
    constructor(private  prismaClient: PrismaService) { }

    async getPetType(type: string): Promise<PetType>{
        const petType = await this.prismaClient.petType.findUnique({
            where: {
                type: type
            }
        })
    
        return petType
    }
}