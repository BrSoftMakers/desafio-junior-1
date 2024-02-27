export interface ICreatedClient {
  id?: number;
  ownerId?: number;
  name: string;
  owner: string;
  nascimento: string;
  animal: string;
  raca: string;
  ownerPhone: string;
};

export interface IClientRegister {
  name: string;
  owner: string;
  nascimento: string;
  animal: string;
  raca: string;
  ownerPhone: string;
}

export interface IDeleteClient {
  id: number;
  ownerId: number;
  name: string;
  owner: string;
  nascimento: string;
  animal: string;
  raca: string;
  ownerPhone: string;
};