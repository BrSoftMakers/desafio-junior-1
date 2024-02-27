// pet.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findById(id: number): Promise<Pet | undefined> {
    const options: FindOneOptions<Pet> = {
      where: { id },
    };
    return this.petRepository.findOne(options);
  }
  

  async create(petData: Pet): Promise<Pet> {
    const pet = this.petRepository.create(petData);
    return this.petRepository.save(pet);
  }

  async update(id: number, petData: Pet): Promise<Pet | undefined> {
    const existingPet = await this.petRepository.findOne({ where: { id } });
    if (!existingPet) {
      return undefined;
    }
    const updatedPet = Object.assign(existingPet, petData);
    return this.petRepository.save(updatedPet);
  }

  async delete(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }

  
}
