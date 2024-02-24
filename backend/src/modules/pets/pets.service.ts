import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findAll() {
        return this.prisma.pet.findMany();
    }

    async findOne(id: number) {
        const pet = await this.prisma.pet.findUnique({
            where: { id },
        });
        if (!pet) {
            throw new NotFoundException('Pet not found');
        }
        return pet;
    }

    async update(id: number, updatePetDto: PetDTO) {
        const { dateOfBirth, ...data } = updatePetDto;
        const age = this.calculateAge(dateOfBirth);

        const pet = await this.prisma.pet.update({
            where: { id },
            data: { ...data, dateOfBirth, age },
        });
        return pet;
    }

    async delete(id: number) {
        const pet = await this.prisma.pet.findUnique({
            where: { id },
        });
        if (!pet) {
            throw new NotFoundException('Pet not found');
        }
        await this.prisma.pet.delete({
            where: { id },
        });
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
