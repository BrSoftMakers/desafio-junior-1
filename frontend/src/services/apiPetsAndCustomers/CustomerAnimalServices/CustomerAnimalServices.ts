import { api } from '../config'

export class CustomerAnimalServices {
  static async createRelationCustomerAndPet(
    customerId: number,
    animalId: number
  ) {
    await api.post('/customer-animal', { customerId, animalId })
  }

  static async deleteRelationCustomerAndPet(
    customerId: number,
    animalId: number
  ) {
    await api.delete(
      `/customer-animal?customerId=${customerId}&animalId=${animalId}`
    )
  }
}
