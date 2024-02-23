<<<<<<< HEAD
interface PetInterface {
    id:       string,
    name:      string,
    breed:     string,
    birth:     Date,

    ownerName:  string,
    ownerPhone: string,
}

export class Pet {
    public readonly id: string;
    public name: string;
    public breed: string;
    public petTypeId: number;
    public birth: Date;
    
    public ownerName: string;
    public ownerPhone: string;

    constructor(props: PetInterface) {
        Object.assign(this, props)
    }
=======
interface PetInterface {
    id:       string,
    name:      string,
    breed:     string,
    birth:     Date,

    ownerName:  string,
    ownerPhone: string,
}

export class Pet {
    public readonly id: string;
    public name: string;
    public breed: string;
    public petTypeId: number;
    public birth: Date;
    
    public ownerName: string;
    public ownerPhone: string;

    constructor(props: PetInterface) {
        Object.assign(this, props)
    }
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}