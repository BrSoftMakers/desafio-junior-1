<<<<<<< HEAD
import { Filter, Page } from "src/modules/chore/models";
import { Pet } from "../models";

export abstract class GetPets {
    execute: (filter: Filter) => Promise<Page<Pet>>
=======
import { Filter, Page } from "src/modules/chore/models";
import { Pet } from "../models";

export abstract class GetPets {
    execute: (filter: Filter) => Promise<Page<Pet>>
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}