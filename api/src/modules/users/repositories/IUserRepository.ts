import { UserDTO } from "../dtos";

export interface IUserRepository {
  create(data: UserDTO): Promise<void>
}
