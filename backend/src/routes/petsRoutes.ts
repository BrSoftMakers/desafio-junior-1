import { Router } from 'express';

import PetsController from '../Controllers/PetsController';
import Pet from '../models/Pet';

const petsRouter = Router();

const petsController = new PetsController();

petsRouter.get('/', async (request, response) => {
  const pets = await petsController.show();

  return response.json(pets);
});

petsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const pet = await petsController.showById(id);

  return response.json(pet);
});

petsRouter.post('/', async (request, response) => {
  const data = request.body as Omit<Pet, 'id'>;

  const pet = await petsController.create(data);

  return response.json(pet);
});

petsRouter.put('/', async (request, response) => {
  const data = request.body as Pet;

  const pet = await petsController.update(data);

  return response.json(pet);
});

petsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const pets = await petsController.delete(id);

  return response.json(pets);
});

export default petsRouter;
