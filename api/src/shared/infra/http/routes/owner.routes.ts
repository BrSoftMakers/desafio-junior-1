import { Router } from "express";
import { CreateOwnerController } from "../../../../modules/owners/useCases/CreateOwner/CreateOwnerController";
import { DeleteOwnerController } from "../../../../modules/owners/useCases/DeleteOwner/DeleteOwnerController";
import { UpdateOwnerController } from "../../../../modules/owners/useCases/UpdateOwner/UpdateOwnerController";

const ownerRoutes = Router();

const createOwnerController = new CreateOwnerController();
const updateOwnerController = new UpdateOwnerController();
const destroyOwnerController = new DeleteOwnerController();


ownerRoutes.post('/', createOwnerController.handle);
ownerRoutes.put('/:id', updateOwnerController.handle);
ownerRoutes.delete('/:id', destroyOwnerController.handle);

export { ownerRoutes };
