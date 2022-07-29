import { Request, Response } from "express";
import { container } from "tsyringe";
import { DestroyPetUseCase } from "./DestroyPetUseCase";

export class DestroyPetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const destroyPetUseCase = container.resolve(DestroyPetUseCase);

    try {
      await destroyPetUseCase.execute(id);
    } catch (error) {
      return response.status(404).json({
        message: 'Pet no exists'
      })
    }

    return response.status(204).end();
  }
}