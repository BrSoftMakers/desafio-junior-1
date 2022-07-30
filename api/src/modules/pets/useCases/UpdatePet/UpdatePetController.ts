import { Request, Response } from "express";
import { container } from "tsyringe";
import { IPetRequest } from "../../dtos";
import { UpdatePetUseCase } from "./UpdatePetUseCase";

export class UpdatePetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IPetRequest = request.body;
    const { id } = request.params;
    const updatePetUseCase = container.resolve(UpdatePetUseCase)

    try {
      await updatePetUseCase.execute(data, id);
    } catch (error) {
      return response.status(404).json({
        message: 'Pet no exists'
      })
    }

    return response.status(200).end();
  }
}