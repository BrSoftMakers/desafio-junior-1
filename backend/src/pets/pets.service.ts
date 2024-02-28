import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  update(id: number, pet: Pet) {
    return this.petsRepository.update(id, pet);
  }

  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  create(pet: Pet): Promise<Pet> {
    return this.petsRepository.save(pet);
  }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet | null> {
    return this.petsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.petsRepository.delete(id);
  }
}
