import { createPet, deletePet, editPet } from "../../../api";
import { PetData } from "../../../models/create-pet";

const OperationFunction: Record<string, (pet: PetData) => Promise<void> > = {
    'Create': createPet,
    'Edit': editPet,
    'Delete': deletePet
}

export default OperationFunction;