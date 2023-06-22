import { Router } from 'express';
import petsController from '../controllers/PetsController';

const router = new Router();

router.get('/', petsController.index);
router.post('/', petsController.store);
router.get('/:id', petsController.show);
router.put('/:id', petsController.update);
router.delete('/:id', petsController.delete);

export default router;
