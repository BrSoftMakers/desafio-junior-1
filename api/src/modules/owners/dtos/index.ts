export interface OwnerDTO {
  name: string,
  phone: string,
  zip_code: string,
  complement?: string,
  address: string,
  district: string,
  city: string,
  uf: string
}

export interface IOwnerRequest {
  name: string,
  phone: string,
  zip_code: string,
  complement?: string,
  address?: string,
  district?: string,
  city?: string,
  uf?: string
}

export interface ICEPResponse {
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string
}