import { Owner } from "@prisma/client";
import { OwnerDTO } from "../dtos";

export interface IOwnerRepository {
  create(data: OwnerDTO): Promise<string>
  findById(id: string): Promise<Owner | null>
  update(id: string, data: OwnerDTO): Promise<void>
  destroy(id: string): Promise<void>
}