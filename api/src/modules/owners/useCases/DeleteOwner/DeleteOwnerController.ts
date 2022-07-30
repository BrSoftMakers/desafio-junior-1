import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteOwnerUseCase } from "./DeleteOwnerUseCase";

export class DeleteOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteOwnerUseCase = container.resolve(DeleteOwnerUseCase);

    try{
      await deleteOwnerUseCase.execute(id);
    } catch (error) {
      console.log(error);
      return response.status(404).json({
        message: 'Owner no exists'
      });
    }

    return response.status(204).end();
  }
}