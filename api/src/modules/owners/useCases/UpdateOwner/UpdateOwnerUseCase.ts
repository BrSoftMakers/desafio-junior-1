import { inject, injectable } from "tsyringe";

import { OwnerDTO } from "../../dtos";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
export class UpdateOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) {}

  async execute(id: string, data: OwnerDTO): Promise<void> {
    await this.ownerRepository.update(id, data);
  }
}