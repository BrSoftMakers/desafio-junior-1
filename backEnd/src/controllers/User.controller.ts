import { Request, Response } from "express";
import { Userbusiness } from "../business/User.business";
import UserDatabase from "../database/UserDatabase";


const userbusiness = new Userbusiness(new UserDatabase());

export class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
     
      const inputUser = {
        name: req.body.name,
        adress: req.body.adress,
        adress_number: req.body.adress_number,
        phone: req.body.phone,
      };

      await userbusiness.create(inputUser);
      res.send(inputUser)
      res.end();
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const result = await userbusiness.getUser();
      res.send(result);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async getUserById (req: Request , res : Response) {
    try{
      const idUser = req.params.idUser as string;
      const result = await userbusiness.getUserById(idUser)
     res.send(result)
    }catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
   
  }
  async deleteUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as string;
      await userbusiness.deleteUserById(id);
      res.end();
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
