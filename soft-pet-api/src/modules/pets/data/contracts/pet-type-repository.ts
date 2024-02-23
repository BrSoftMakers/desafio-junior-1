import { PetType } from "../../domain/models";

export abstract class PetTypeRepository {
    getPetType: (type: string) => Promise<PetType>
}