export type PetType = 'cat' | 'dog';

export interface Owner {
  id?: string;
  name: string;
  phone: string;
  cpf?: string | null;
  email?: string | null;
  zipCode?: string | null;
  street?: string | null;
  number?: string | null;
  city?: string | null;
  state?: string | null;
}

export interface Pet {
  id: string;
  name: string;
  birthDate: string; // "YYYY-MM-DD"
  type: PetType;
  breed: string;
  owner: Owner;
}

// o que o modal envia (dono só com nome e telefone)
export interface PetInput {
  name: string;
  birthDate: string;
  type: PetType;
  breed: string;
  owner: { name: string; phone: string };
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  lastPage: number;
}