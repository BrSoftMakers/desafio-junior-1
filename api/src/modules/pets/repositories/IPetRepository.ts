import { Pet } from "@prisma/client"

import { PetDTO } from "../dtos"

export interface IPetRepository {
  list(skip: number): Promise<{ pets: Pet[], total: number }>
  create(data: PetDTO): Promise<void>
  update(data: PetDTO, id: string): Promise<void>
  destroy(id: string): Promise<void>
  findById(id: string): Promise<Pet | null>
}
