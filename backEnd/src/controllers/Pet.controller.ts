import { Request, Response } from "express";
import { PetBusiness } from "../business/Pet.business";
import PetDatabase from "../database/PetDatabase";

const petBusiness = new PetBusiness(new PetDatabase());

export class PetController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
     

      const input = {
        name: req.body.name,
        age: req.body.age,
        type: req.body.type,
        breed: req.body.breed,
        id_User: req.body.user_id,
      };

      await petBusiness.create(input);
      res.end();
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async getAllPets(req: Request, res: Response) {
    try {
      const result = await petBusiness.getAllPets();
      res.send(result);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async getPetById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const result = await petBusiness.getPetById(id);
      res.send(result);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async deletePetById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as string;
      await petBusiness.deletePetById(id);
      res.end();
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
