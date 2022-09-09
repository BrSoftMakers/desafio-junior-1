
import { IUser } from "../services";
import { Client } from "./User";

export interface UserRepository {
    create(client: Client) : Promise<void>
    getUser() : Promise<IUser[]>
    getUserById(idUser : string): Promise<IUser[]>
    deleteUserById(id : string) : Promise<number>
}