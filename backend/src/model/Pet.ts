export class Pet {
    constructor(
      private id: string,
      private name: string,
      private age: number,
      private pet: string,
      private petBreed: string,
      private ownerName: string,
      private phone: string
    ) {}
  
    getId() {return this.id};
    getName() {return this.name}
    getAge() {return this.age}
    getPet() {return this.pet}
    getPetBreed() {return this.petBreed}
    getOwnerName() {return this.ownerName}
    getPhone() {return this.phone}
  
    public static toPetModel(pet: any): Pet {
      return new Pet (
        pet.id, 
        pet.name, 
        pet.age,
        pet.pet,
        pet.petBreed,
        pet.ownerName,
        pet.phone
      )
    };
  
};

export interface PetInputDTO {
    name: string;
    age: number;
    pet: string;
    petBreed: string,
    ownerName: string,
    phone: string
};
