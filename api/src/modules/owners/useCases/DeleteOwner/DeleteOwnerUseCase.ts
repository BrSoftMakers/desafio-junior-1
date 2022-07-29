import { inject, injectable } from "tsyringe";

import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
export class DeleteOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.ownerRepository.destroy(id);
  }
}