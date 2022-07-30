export interface Owner {
  "name": string,
	"phone": string,
	"zip_code": string,
	"address": string,
	"district": string,
  "complement"?: string,
	"city": string,
	"uf": string
}

export interface Pet {
  "id": string,
	"name": string,
	"age": number,
	"type": string,
	"breed": string,
  "ownerId": string
  "Owner": Owner
}

export interface IPropsCard {
  "pet": Pet
}

export interface IPropsWidgetForm {
  pet?: Pet;
}

export interface ICat {
  name: string;
}

export interface ICEPResponse {
  localidade: string,
  logradouro: string,
  uf: string,
  bairro: string
}

export interface IPropsWidgetForm {
  pet?: Pet;
}
