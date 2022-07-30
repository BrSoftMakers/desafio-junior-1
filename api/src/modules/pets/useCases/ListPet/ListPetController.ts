import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPetUseCase } from "./ListPetUseCase";

interface IQuerys {
  page: number
}

export class ListPetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;
    const listPetUseCase = container.resolve(ListPetUseCase);
    
    let pageNumber = Number(page) - 1;
    let skip = pageNumber * 4;

    const data = await listPetUseCase.execute(skip);

    return response.status(200).json(data);
  }
}