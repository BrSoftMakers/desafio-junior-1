import { Body, Controller, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { Pet } from "./entities/pet.entity";
import { v4 as uuid } from 'uuid'
import { PetDto } from "./dto/pet.dto";
import { UpdatePetDto } from "./dto/update_pet.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('pets')
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get(':id')
    @ApiOperation({ summary: "Busca pet pelo id" })
    @ApiResponse({ status: 200, description: 'Pet retornado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
    @ApiResponse({ status: 500, description: 'Erro interno.' })
    findById(@Param('id') id: string) {
        return this.petsService.searchById(id);
    }

    @Get()
    @ApiOperation({ summary: "Lista todos os pets" })
    @ApiResponse({ status: 200, description: 'Lista de pets retornada com sucesso.' })
    @ApiResponse({ status: 500, description: 'Erro interno.' })
    findAll(): Promise<PetDto[]> {
        return this.petsService.findAllPets()
    }
    

    @Post()
    @ApiOperation({ summary: 'Cria um novo pet' })
    @ApiResponse({ status: 201, description: 'Pet criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    newPet(@Body() dataPet: PetDto) {
        let newPet: Pet = {
            id: uuid(),
            name: dataPet.name,
            animal: dataPet.animal,
            race: dataPet.race,
            owner: dataPet.owner,
            phone: dataPet.phone,
            birthdate: dataPet.birthdate
        }

        return this.petsService.create(newPet);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Deleta um pet' })
    @ApiResponse({ status: 200, description: 'Pet deletado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
    remove(@Param('id') id: string) {
        return this.petsService.delete(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um pet existente' })
    @ApiResponse({ status: 200, description: 'Pet atualizado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
    update(@Param('id') id: string, @Body() newData: UpdatePetDto) {
        return this.petsService.update(id, newData)
    }
}
