import { prisma } from "../../../../shared/infra/prisma/prisma";
import { UserDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

export class UserRepository implements IUserRepository{
  async create(data: UserDTO): Promise<void> {
    await prisma.user.create({ data });
  }
}
