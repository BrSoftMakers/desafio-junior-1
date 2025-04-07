import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pet } from './entities/pet.entity';  
import { CreatePetDto } from './dto/create-pet.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Pet as PetModel } from './entities/pet.entity'; 

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet) private petModel: typeof Pet, 
  ) {}

  @ApiOperation({ summary: 'Criar um novo pet' })
  @ApiResponse({ status: 201, description: 'Pet criado com sucesso', type: Pet })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = await this.petModel.create(createPetDto as unknown as Pet);
    return pet;
  }

  @ApiOperation({ summary: 'Listar todos os pets' })
  @ApiResponse({ status: 200, description: 'Lista de pets', type: [Pet] })
  async findAll() {
    return this.petModel.findAll();
  }

  @ApiOperation({ summary: 'Buscar pet por ID' })
  @ApiResponse({ status: 200, description: 'Pet encontrado', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  async findOne(id: string) {
    return this.petModel.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Atualizar dados de um pet' })
  @ApiResponse({ status: 200, description: 'Pet atualizado com sucesso', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  async update(id: string, createPetDto: CreatePetDto) {
    const pet = await this.petModel.findOne({ where: { id } });
    if (pet) {
      return pet.update(createPetDto as unknown as Pet);
    }
    return null;
  }

  @ApiOperation({ summary: 'Deletar um pet' })
  @ApiResponse({ status: 200, description: 'Pet deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  async remove(id: string) {
    const pet = await this.petModel.findOne({ where: { id } });
    if (pet) {
      await pet.destroy();
      return true;
    }
    return false;
  }
}
