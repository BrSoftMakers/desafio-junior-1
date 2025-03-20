import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}

  async findAll(): Promise<Pet[]> {
    return this.petRepo.find();
  }

  async findOne(id: number): Promise<Pet> {
    const pet = await this.petRepo.findOneBy({ id });
    if (!pet) {
      throw new NotFoundException(`Pet com ID ${id} não encontrado`);
    }
    return pet;
  }

  async create(data: Partial<Pet>): Promise<Pet> {
    const pet = this.petRepo.create(data);
    pet.age = this.calculateAge(new Date(pet.birthDate)); 
    return this.petRepo.save(pet);
  }

  async update(id: number, data: Partial<Pet>): Promise<Pet> {
    const pet = await this.findOne(id); 
    if (data.birthDate) {
      data.age = this.calculateAge(new Date(data.birthDate)); 
    }
    await this.petRepo.update(id, data);
    return { ...pet, ...data }; 
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const pet = await this.findOne(id); 
    await this.petRepo.delete(id);
    return { deleted: true };
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
