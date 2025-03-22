import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';

describe('PetsService', () => {
    let service: PetsService;
    let repository: Repository<Pet>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PetsService,
                {
                    provide: getRepositoryToken(Pet),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                        findOne: jest.fn(),
                        delete: jest.fn(),
                        find: jest.fn(),
                    }
                },
            ],
        }).compile();

        service = module.get<PetsService>(PetsService);
        repository = module.get<Repository<Pet>>(getRepositoryToken(Pet));
    });

    it('Is defined', () => {
        expect(service).toBeDefined();
    });

    //TESTING CREATE FUNCTION
    it('Must create a new pet', async () => {
        const petData = { id: '123abc', name: 'Name', animal: 'Cachorro', race: 'Pincher', owner: 'John', phone: 123, birthdate: new Date('2025/03/19') };

        (repository.create as jest.Mock).mockReturnValue(petData);
        (repository.save as jest.Mock).mockResolvedValue(petData);

        const result = await service.create(petData);
        expect(result).toEqual(petData);
    })

    // TESTING SEARCH PET BY ID
    it('Must search pet by ID', async () => {
        const petData = { id: '123abc', name: 'Name', animal: 'Cachorro', race: 'Pincher', owner: 'John', phone: 123, birthdate: new Date('2025/03/19') };

        (repository.findOne as jest.Mock).mockReturnValue(petData)

        const result = await service.searchById('123abc')
        expect(result).toEqual(petData)
    })

    // TESTING ERROR ON SEARCH BY ID
    it('Must return a error', async () => {
        (repository.findOne as jest.Mock).mockResolvedValue(null);

        try {
            await service.searchById('invalid-id');
          } catch (e) {
            expect(e).toBeInstanceOf(NotFoundException);
            expect(e.message).toBe('Pet not founded');
          }
    })

    // TESTING SHOW ALL PETS
    it('Must return all pets', async () => {
        const petsArray: Pet[] = [
            { id: '123abc', name: 'Name', animal: 'Cachorro', race: 'Pincher', owner: 'John', phone: 123, birthdate: new Date('2025/03/19') },
            { id: '123abc1', name: 'Name1', animal: 'Cachorro1', race: 'Pincher1', owner: 'John1', phone: 1231, birthdate: new Date('2025/03/19') },
        ];
        
        (repository.find as jest.Mock).mockResolvedValue(petsArray);

        const result = await service.findAllPets();
        expect(result).toEqual(petsArray)
    })

    // TESTING UPDATE PET DATA
    it('Must update pet data', async () => {
        const petData = { id: '123abc', name: 'Name', animal: 'Cachorro', race: 'Pincher', owner: 'John', phone: 123, birthdate: new Date('2025/03/19') };
        const updateData = { name: 'Rex' };
        const updatedPet = { ...petData, ...updateData };

        (repository.findOne as jest.Mock).mockReturnValue(petData);
        (repository.save as jest.Mock).mockReturnValue(updatedPet);

        const result = await service.update(petData.id, updateData);
        expect(result).toEqual(updatedPet)
    })

    // TESTING DELETE PET DATA
    it('Must delete pet data', async () => {
        const petData = { id: '123abc', name: 'Name', animal: 'Cachorro', race: 'Pincher', owner: 'John', phone: 123, birthdate: new Date('2025/03/19') };

        (repository.findOne as jest.Mock).mockResolvedValue(petData);
        (repository.delete as jest.Mock).mockResolvedValue(petData);

        const result = await service.delete(petData.id)
        expect(result).toEqual({ message: 'Pet deleted successful' })
    })

})