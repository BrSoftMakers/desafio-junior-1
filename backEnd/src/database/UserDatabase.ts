import { Client } from "../models/User";
import { UserRepository } from "../models/UserRepository";
import { IUser } from "../services";

import { Database } from "./connection";

const user_table = "User"


export default class UserDatabase extends Database implements UserRepository {

   public async create(user: Client): Promise<void> {
      return await Database.connection(user_table).insert(user)
   }

   public async getUser(): Promise<IUser[]>{
      const result = await Database.connection(user_table).select("*")
      
      return result.flat(1)
   }

   public async getUserById(id: string): Promise<IUser[]> {
      return await Database.connection(user_table).select("*").where({ id })
   }

   public async deleteUserById(id : string) : Promise<number>{
      return await Database.connection(user_table).delete().where({id})
   }

}