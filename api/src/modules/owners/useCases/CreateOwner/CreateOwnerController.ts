import { container } from "tsyringe";
import { Request, Response } from "express";

import { IOwnerRequest } from "../../dtos";
import { CreateOwnerUseCase } from "./CreateOwnerUseCase";
import { AddressCheck } from "../../helpers/AddressCheck";

export class CreateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IOwnerRequest = request.body;
    const createOwnerUseCase = container.resolve(CreateOwnerUseCase);

    const owner = await AddressCheck(data);

    const id = await createOwnerUseCase.execute(owner);

    return response.status(201).json(id);
  }
}
