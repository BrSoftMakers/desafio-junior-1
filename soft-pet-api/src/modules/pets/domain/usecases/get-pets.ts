import { Filter, Page } from "src/modules/chore/models";
import { Pet } from "../models";

export abstract class GetPets {
    execute: (filter: Filter) => Promise<Page<Pet>>
}