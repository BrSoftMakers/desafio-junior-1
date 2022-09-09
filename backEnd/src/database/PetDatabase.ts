import { Pet } from "../models/Pet";
import { PetRepository } from "../models/PetRepository";
import { IAnimal } from "../services/types";
import { Database } from "./connection";

const pet_table = "pet"

export default class PetDatabase extends Database implements PetRepository {
  public async deletePetById(id: string): Promise<number> {
    return await Database.connection(pet_table).delete().where({id})
  }

  public async getPetById(id: string): Promise<IAnimal[]> {
    return await Database.connection(pet_table).select("*").where({ id })
  }

  public async getPet(): Promise<IAnimal[]> {
    const result = await Database.connection(pet_table).select("*")
    
    return result.flat(1)
  }

  public async create(pet: Pet): Promise<void> {
    return await Database.connection(pet_table).insert(pet)
  }
}