import { Request, Response } from "express";
import { container } from "tsyringe";
import { OwnerDTO } from "../../dtos";
import { UpdateOwnerUseCase } from "./UpdateOwnerUseCase";

export class UpdateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: OwnerDTO = request.body;
    const updateOwnerUseCase = container.resolve(UpdateOwnerUseCase);

    try{
      await updateOwnerUseCase.execute(id, data);
    } catch (error) {
      return response.status(404).json({
        message: 'Owner no exists'
      });
    }
  
    return response.status(201).end();
  }
}