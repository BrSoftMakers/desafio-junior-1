import { api } from '../config'

export class CustomerAnimalServices {
  static async createRelationCustomerAndPet(
    customerId: number,
    animalId: number
  ) {
    await api.post('/customer-animal', { customerId, animalId })
  }
}
