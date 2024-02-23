import { Injectable } from '@nestjs/common';
import { PetDTO } from './pets.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PetsService {

    constructor(private prisma: PrismaService) {}

    async create(createPetDto: PetDTO){
        const { dateOfBirth, ...data } = createPetDto;
        const age = this.calculateAge(dateOfBirth);

        const pet = await this.prisma.pet.create({
            data: { ...data, dateOfBirth, age },
        })
        return pet;
    }

    private calculateAge(dateOfBirth: Date): number {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
    }
}
