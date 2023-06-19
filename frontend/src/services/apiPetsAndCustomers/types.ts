export interface IPet {
  id?: number
  name: string
  type: 'cat' | 'dog'
  race: string
  age: number
  createdAt?: string
  updatedAt?: string
  customers: ICustomer[]
}

export interface ICustomer {
  id: number
  fullName: string
  email: string
  phone: string
  createdAt?: string
  updatedAt?: string
  customerAddress?: ICustomerAddress
  animals?: IPet[]
}

export interface ICustomerAddress {
  id?: number
  zipCode: string
  street: string
  number: string
  state: string
  city: string
  customerId?: number
  createdAt?: string
  updatedAt?: string
}
