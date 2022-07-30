import { inject, injectable } from "tsyringe";
import { PetDTO } from "../../dtos";
import { IPetRepository } from "../../repositories/IPetRepository";

@injectable()
export class DestroyPetUseCase {
  constructor(
    @inject('PetRepository')
    private petRepository: IPetRepository
  ) {}

  async execute(id: string) {
    await this.petRepository.destroy(id)
  }
}