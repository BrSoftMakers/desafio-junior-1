import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
export declare class PetService {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    findAll(): Promise<Pet[]>;
    findById(id: number): Promise<Pet | undefined>;
    create(petData: Pet): Promise<Pet>;
    update(id: number, petData: Pet): Promise<Pet | undefined>;
    delete(id: number): Promise<void>;
}
