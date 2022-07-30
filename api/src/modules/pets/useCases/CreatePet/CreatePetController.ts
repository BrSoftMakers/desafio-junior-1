import { Request, Response } from "express";
import { container } from "tsyringe";

import { IPetRequest } from "../../dtos";
import { CreatePetUseCase } from "./CreatePetUseCase";

export class CreatePetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IPetRequest = request.body;
    const createPetUseCase = container.resolve(CreatePetUseCase);
    
    await createPetUseCase.execute(data);
    
    return response.status(201).end();
  }
}