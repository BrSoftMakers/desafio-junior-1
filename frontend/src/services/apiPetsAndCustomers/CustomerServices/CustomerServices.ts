import { api } from '../config'
import { ICustomer } from '../types'

export class CustomerServices {
  static async getAllCustomers(page: number, limit: number, searchFilter = '') {
    const url = `/customers?page=${page}&limit=${limit}&searchFilter=${searchFilter}`
    const customers = await api.get<Omit<ICustomer, 'customerAddress'>[]>(url)
    return customers.data
  }

  static async getCustomer(customerId: number) {
    const customers = await api.get<ICustomer>(`/customers/${customerId}`)
    return customers.data
  }

  static async createCustomer(customerData: Omit<ICustomer, 'id'>) {
    const customers = await api.post<number>(`/customers`, customerData)
    return customers.data
  }

  static async updateCustomer(
    customerId: number,
    customerData: Omit<ICustomer, 'id'>
  ) {
    await api.patch(`/customers/${customerId}`, customerData)
  }

  static async deleteCustomer(customerId: number) {
    await api.delete(`/customers/${customerId}`)
  }
}
