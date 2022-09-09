import { IdGenerator } from "../services/IdGeneration";
import { IAnimal, AnimalType } from "../services/types";

export class Pet {
  private id?: string
  constructor(  
    private name: string,
    private age: number,
    private type: AnimalType,
    private breed: string,
    private id_User : string
  ) {
    if(!this.id){
      this.id =  this.id = new IdGenerator().generateId() 
    }
  }
}
