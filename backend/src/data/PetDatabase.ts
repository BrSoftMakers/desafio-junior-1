import { BaseDatabase } from "./base/BaseDatabase";
import { Pet } from "../model/Pet";

export class PetDatabase extends BaseDatabase {

    public async registerPet (
        id: string,
        name: string,
        age: number,
        pet: string,
        petBreed: string,
        ownerName: string,
        phone: string
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert ({
                    id,
                    name,
                    age,
                    pet,
                    pet_breed: petBreed,
                    owner_name: ownerName,
                    phone
                })
                .into(this.tableNames.petshop);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async getAllPets(): Promise<Pet[]> {
        try {
            const result = await this.getConnection()
              .select('*')
              .from(this.tableNames.petshop)
            
            return result;
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async updatePet (
        id: string, 
        name: string,
        age: number,
        pet: string,
        petBreed: string,
        ownerName: string,
        phone: string
    ): Promise<void> {
        try {
            await this.getConnection().raw(`
                UPDATE ${this.tableNames.petshop}
                SET name = '${name}', 
                    age = ${age}, 
                    pet = '${pet}', 
                    pet_breed = '${petBreed}', 
                    owner_name = '${ownerName}', 
                    phone = '${phone}'
                WHERE id = '${id}'
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async deletePet(id: string): Promise<void> {
        try {
            await this.getConnection()
              .del()
              .from(this.tableNames.petshop)
              .where({ id })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

};
