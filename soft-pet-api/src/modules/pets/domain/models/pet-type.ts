<<<<<<< HEAD
import { Pet } from "./pet";

interface PetTypeInterface {
    id: number,
    type: string,
    pets?: Array<Pet>
}

export class PetType {
    public readonly id: number;
    public type: string;
    public pets?: Array<Pet>;

    constructor(props: PetTypeInterface) {
        Object.assign(this, props);
    }
=======
import { Pet } from "./pet";

interface PetTypeInterface {
    id: number,
    type: string,
    pets?: Array<Pet>
}

export class PetType {
    public readonly id: number;
    public type: string;
    public pets?: Array<Pet>;

    constructor(props: PetTypeInterface) {
        Object.assign(this, props);
    }
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}