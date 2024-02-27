
import { PrismaService } from "src/prisma.service";
import { Pet } from "./pet.model";
import { Injectable } from "@nestjs/common";


@Injectable()

export class PetServices {
  constructor(private prisma:PrismaService){

  }


  async getAllPets(): Promise<Pet[]> {
    return this.prisma.pets.findMany();
  }



  async getPet(id:number): Promise<Pet | null> {
    return this.prisma.pets.findUnique({where:{id:Number(id)}});
  }

  async addPet(data: Pet): Promise<Pet> {
    return this.prisma.pets.create({
      data,
    });
  }
  async editPet(id:string, data:Pet):Promise<Pet> {
    return this.prisma.pets.update({
      where:{id:Number(id)},
      data:{ 
        nome:data.nome,
        animal:data.animal,
        nascimento: data.nascimento,
        dono: data.dono,
        raca: data.raca,
        telefone: data.telefone
      }
    });
  }


  async removePet(id: number):Promise<Pet | void>{
    await this.prisma.pets.delete({
      where:{id:Number(id)}
    });
  }
}