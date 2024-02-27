import { Prisma } from "@prisma/client";

export class Pet {
  id: number;
  nome: string; 
  animal: string; 
  dono: string;
  raca: string; 
  telefone: string; 
  nascimento: string; 
}