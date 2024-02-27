import { Pet } from './pet.entity';
import { PetService } from './pet.service';
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    findAll(): Promise<Pet[]>;
    create(petData: Pet): Promise<Pet>;
    update(id: number, petData: Pet): Promise<Pet | undefined>;
    delete(id: number): Promise<void>;
}
