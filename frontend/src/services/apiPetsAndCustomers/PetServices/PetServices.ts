import { api } from '../config'
import { IPet } from '../types'

export class PetService {
  static async getAllPets(page: number, limit: number) {
    const pets = await api.get<Omit<IPet, 'customers'>[]>(
      `/animals?limit=${limit}&page=${page}`
    )
    return pets.data
  }

  static async getPet(petId: number) {
    const pets = await api.get<IPet>(`/animals/${petId}`)
    return pets.data
  }

  static async createPet(petData: Omit<IPet, 'customers'>) {
    const petId = await api.post('/animals', petData)
    return petId.data
  }

  static async updatePet(petId: number, petData: Omit<IPet, 'customers'>) {
    await api.patch(`/animals/${petId}`, petData)
  }

  static async deletePet(petId: number) {
    await api.delete(`/animals/${petId}`)
  }
}
