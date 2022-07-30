import { inject, injectable } from "tsyringe";
import { OwnerDTO } from "../../dtos";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
export class CreateOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) {}

  async execute(data: OwnerDTO): Promise<string> {
    const id = await this.ownerRepository.create(data);

    return id;
  }
}