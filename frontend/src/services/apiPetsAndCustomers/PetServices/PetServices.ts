import { api } from '../config'
import { IPet } from '../types'

export class PetService {
  static async getAllPets(page: number, limit: number) {
    const pets = await api.get<Omit<IPet, 'customers'>[]>(
      `/animals?limit=${limit}&page=${page}`
    )
    return pets
  }

  static async getPet(petId: number) {
    const pets = await api.get<Omit<IPet, 'customers'>>(`/animals/${petId}`)
    return pets
  }

  static async createPet(petData: Omit<IPet, 'customers'>) {
    const pets = await api.post('/animals', petData)
    return pets
  }

  static async updatePet(petId: number, petData: Omit<IPet, 'customers'>) {
    await api.post(`/animals/${petId}`, petData)
  }

  static async deletePet(petId: number) {
    await api.delete(`/animals/${petId}`)
  }
}
