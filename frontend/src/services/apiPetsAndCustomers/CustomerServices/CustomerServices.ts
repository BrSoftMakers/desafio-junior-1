import { api } from '../config'
import { ICustomer } from '../types'

export class CustomerServices {
  static async getAllCustomers(page: number, limit: number, searchFilter = '') {
    const url = `/customers?page=${page}&limit=${limit}&searchFilter=${searchFilter}`
    const customers = await api.get<Omit<ICustomer, 'customerAddress'>[]>(url)
    return customers.data
  }
}
