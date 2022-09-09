import UserDatabase from "../database/UserDatabase";
import { CustomError } from "../error/CustomError";
import { Client } from "../models/User";
import { IUser } from "../services";

export class Userbusiness {
    constructor(private userDatabase : UserDatabase){}

    async create(user : IUser): Promise <void>{

        const {name , adress , adress_number , phone} = user

        if(!name || !adress || !adress_number || !phone){
            throw new CustomError("Todos os campos precisam ser preenchidos.", 422)
        }

        const newUser = new Client(
            name,
            adress,
            adress_number,
            phone
        )
        await this.userDatabase.create(newUser)

    }

    async getUser() : Promise<IUser[]>{
        const result = await this.userDatabase.getUser()
        
        if(!result.length){
            throw new CustomError("Nenhum usuario foi encontrado/cadastrado em nosso sistema.", 404)
        }

        return result
    }

    
    async getUserById(id : string) : Promise<IUser>{
        const findUser = await this.userDatabase.getUserById(id)

        if(!findUser.length){
            throw new CustomError("Usuario não encontrado", 404)
        }

        return findUser[0]
    }

    async deleteUserById(id : string): Promise<number>{
        const findUser = await this.userDatabase.deleteUserById(id)

        if(!findUser){
            throw new CustomError("Usuario não encontrado", 404)
        }
        return await this.userDatabase.deleteUserById(id)
    }
}