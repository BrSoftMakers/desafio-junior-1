import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetRepository } from './pet.repository';
import { CreatePetDto } from './dto/create-pet.dto';
import { ShowPetDto } from './dto/show-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { DeletePetDto } from './dto/delete-pet.dto';
import { ListPetDto } from './dto/list-pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(PetRepository)
    private petRepository: PetRepository,
  ) {}

  createPet(createPetDto: CreatePetDto): Promise<Pet> {
    return this.petRepository.storePet(createPetDto);
  }

  listPets(listPetDto: ListPetDto): Promise<Pet[]> {
    return this.petRepository.listPets(listPetDto);
  }

  showPet(showPetDto: ShowPetDto): Promise<Pet> {
    return this.petRepository.showPet(showPetDto);
  }

  updatePet(id: number, updatePetDto: UpdatePetDto) {
    return this.petRepository.updatePet(updatePetDto, id);
  }

  deletePet(deletePetDto: DeletePetDto) {
    return this.petRepository.deletePet(deletePetDto);
  }
}
