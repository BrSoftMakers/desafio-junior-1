import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreatePetDto } from "../dto/create-pet.dto";
import { CreatePet, DeletePet, GetPetById, GetPets, UpdatePet } from "../../domain/usecases";
import { QueryPetFilter } from "../dto/query-pet.filter";
import { UpdatePetDto } from "../dto/update-pet.dto";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Controller('pets')
@ApiTags('pets')
export class PetsController {
    constructor(
        private readonly createPet: CreatePet,
        private readonly getPets: GetPets,
        private readonly getPetById: GetPetById,
        private readonly updatePet: UpdatePet,
        private readonly deletePet: DeletePet,
    ) {}

    @Post()
    async create(@Res() res: Response, @Body() createPetDto: CreatePetDto) {
        try {
            await this.createPet.execute(createPetDto);
            res.status(HttpStatus.CREATED).send()
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error;
        }
    }

    @Get()
    async get(@Res() res: Response, @Query() filter: QueryPetFilter) {
        try {
            const petsPage = await this.getPets.execute(filter);
            res.status(HttpStatus.OK).send(petsPage);
        } catch(error) {
            throw error;
        }
    }

    @Get(':id')
    async getById(@Res() res: Response, @Param('id') id: string) {
        try {
            const pet = await this.getPetById.execute(id);
            res.status(HttpStatus.OK).send(pet)
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            
            throw error
        }
    }

    @Patch(':id')
    async patchPet(@Res() res: Response, @Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        try {
            const pet = await this.updatePet.execute(id, updatePetDto);
            res.status(HttpStatus.OK).send(pet)
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error;
        }
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: string) {
        try {
            await this.deletePet.execute(id);
            res.status(HttpStatus.OK).send();
        } catch(error) {
            throw error
        }
    }

}