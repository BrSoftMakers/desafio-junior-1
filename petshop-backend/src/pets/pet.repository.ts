import { Repository, EntityRepository } from 'typeorm';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { ShowPetDto } from './dto/show-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { DeletePetDto } from './dto/delete-pet.dto';
import { ListPetDto } from './dto/list-pet.dto';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
  async storePet(createPetDto: CreatePetDto): Promise<Pet> {
    console.log(createPetDto);
    const pet = this.create(createPetDto);

    try {
      return await pet.save();
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Cliente não encontrado');
    }
  }

  async listPets(listPetDto: ListPetDto): Promise<Pet[]> {
    try {
      return this.find({
        where: { clientId: listPetDto.clientId },
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async showPet(showPetDto: ShowPetDto): Promise<Pet> {
    try {
      const pet = await this.findOne({
        where: { id: showPetDto.id },
      });

      if (!pet) {
        throw new BadRequestException('Pet não encontrado');
      }

      return pet;
    } catch (error) {
      throw error;
    }
  }

  async updatePet(updatePetDto: UpdatePetDto, id: number) {
    try {
      await this.showPet({ id });

      return this.update({ id }, updatePetDto);
    } catch (error) {
      throw error;
    }
  }

  async deletePet(deletePetDto: DeletePetDto) {
    try {
      await this.showPet({ id: deletePetDto.id });

      return this.delete({ id: deletePetDto.id });
    } catch (error) {
      throw error;
    }
  }
}
