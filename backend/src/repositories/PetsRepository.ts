import { EntityRepository, Repository } from 'typeorm';
import Pet from '../models/Pet';

@EntityRepository(Pet)
class PetsRepository extends Repository<Pet> {
  public async findById(id: string): Promise<Pet | null> {
    const findPet = await this.findOne({
      where: { id },
    });

    return findPet || null;
  }
}

export default PetsRepository;
