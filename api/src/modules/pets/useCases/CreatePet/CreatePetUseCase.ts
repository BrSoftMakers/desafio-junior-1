import { inject, injectable } from "tsyringe";
import { PetDTO } from "../../dtos";
import { IPetRepository } from "../../repositories/IPetRepository";

@injectable()
export class CreatePetUseCase {
  constructor(
    @inject("PetRepository")
    private petRepository: IPetRepository
  ) {}

  async execute(data: PetDTO): Promise<void> {
    await this.petRepository.create(data);
  }
}