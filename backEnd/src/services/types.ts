
enum AnimalType{
    DOG = "DOG",
    CAT = "CAT"
}

type IAnimal = {
    name : string,
    age : number,
    type : AnimalType,
    breed : string,
    id_User : string
}

type IUser = {
    name: string,
    adress: string,
    adress_number: string,
    phone: string
}

export {IAnimal , AnimalType , IUser}