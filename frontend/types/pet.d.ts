export interface Dono {
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

export interface Pet {
  id: number;
  nome: string;
  tipo: 'cachorro' | 'gato';
  raca: string;
  idade: number;
  donoId: number;
  dono?: Dono;
}