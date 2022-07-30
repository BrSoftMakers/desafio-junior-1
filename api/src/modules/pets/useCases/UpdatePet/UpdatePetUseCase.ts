import { inject, injectable } from "tsyringe";
import { PetDTO } from "../../dtos";
import { IPetRepository } from "../../repositories/IPetRepository";

@injectable()
export class UpdatePetUseCase {
  constructor(
    @inject('PetRepository')
    private petRepository: IPetRepository
  ) {}

  async execute(data: PetDTO, id: string): Promise<void> {
    await this.petRepository.update(data, id);
  }
}