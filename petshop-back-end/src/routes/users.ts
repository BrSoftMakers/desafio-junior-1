import { Router } from 'express';
import { getUsers, postUser, getUser, patchUser, deleteUser, login } from '../controllers/users';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Rota de autenticação
router.post('/login', login);

router.post('/', authMiddleware, postUser);

router.get('/', getUsers);

router.get('/:id', getUser);

router.patch('/:id', authMiddleware, patchUser);

router.delete('/:id', authMiddleware, deleteUser);

export default router;