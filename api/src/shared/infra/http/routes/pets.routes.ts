import { Router } from "express";
import { CreatePetController } from "../../../../modules/pets/useCases/CreatePet/CreatePetController";
import { DestroyPetController } from "../../../../modules/pets/useCases/DestroyPet/DestroyPetController";
import { ListPetController } from "../../../../modules/pets/useCases/ListPet/ListPetController";
import { UpdatePetController } from "../../../../modules/pets/useCases/UpdatePet/UpdatePetController";

const petRoutes = Router();

const createPetController = new CreatePetController();
const listPetController = new ListPetController();
const destroyPetController = new DestroyPetController();
const updatePetController = new UpdatePetController();

petRoutes.get("/", listPetController.handle);

petRoutes.post('/', createPetController.handle);

petRoutes.put('/:id', updatePetController.handle)

petRoutes.delete('/:id', destroyPetController.handle)

export { petRoutes };