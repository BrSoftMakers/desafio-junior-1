import { Request, Response, Router } from 'express';
import { createConnection } from 'typeorm';
import { Pets } from "./../database/entity/pets.entity";

export const router = Router();

createConnection().then(connection => {
  const petsRepository = connection.getRepository(Pets);

  router.get("/pets", async (req: Request, res: Response) => {
    const pets = await petsRepository.find();
    res.json(pets);
  });

  router.get("/pets/:id", async (req: Request, res: Response) => {
    const results = await petsRepository.findOne(req.params.id);
    return res.send(results);
  })

  router.post("/pets", async (req: Request, res: Response) => {
    const pet = await petsRepository.create(req.body);
    const results = await petsRepository.save(pet);
    return res.send(results);
  })

  router.put("/pets/:id", async (req: Request, res: Response) => {
    const pet = await petsRepository.findOne(req.params.id);
    petsRepository.merge(pet as Pets, req.body);
    const results = await petsRepository.save(pet as Pets);
    return res.send(results);
  })

  router.delete("/pets/:id", async (req: Request, res: Response) => {
    const results = await petsRepository.delete(req.params.id);
    return res.send(results);
  });

})




