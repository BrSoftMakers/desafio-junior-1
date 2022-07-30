import { Pet } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IPetRepository } from "../../repositories/IPetRepository";

@injectable()
export class ListPetUseCase {
  constructor(
    @inject('PetRepository')
    private petRepository: IPetRepository
  ) {}

  async execute(skip: number): Promise<{ pets: Pet[], total: number }> {
    return await this.petRepository.list(skip);
  }
}