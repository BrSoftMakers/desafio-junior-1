import { Router } from 'express';
import { getPets, getPet, postPet, patchPet, deletePetHandler } from '../controllers/pets';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getPets);

router.get('/:id', getPet);

router.post('/', authMiddleware, postPet);

router.patch('/:id', authMiddleware, patchPet);

router.delete('/:id', authMiddleware, deletePetHandler);

export default router;