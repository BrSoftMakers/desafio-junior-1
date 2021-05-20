import { Request, Response } from "express";
import { BaseDatabase } from "../data/base/BaseDatabase";
import { PetBusiness } from "../business/PetBusiness";
import { PetDatabase } from "../data/PetDatabase";
import { IdGenerator } from "../services/idGenerator";
import { PetInputDTO } from "../model/Pet";

export class PetController {
    private static PetBusiness = new PetBusiness (
        new PetDatabase(),
        new IdGenerator()
    )

    public async registerPet(req: Request, res: Response) {
        try {

            const input: PetInputDTO = {
                name: req.body.name,
                age: req.body.age,
                pet: req.body.pet,
                petBreed: req.body.petBreed,
                ownerName: req.body.ownerName,
                phone: req.body.phone
            }

            await PetController.PetBusiness.registerPet(input);

            res.status(200).send({ message: "Pet cadastrado!" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    };

    async getPets(req: Request, res: Response) {
        try {            
            const pets = await PetController.PetBusiness.getAllPet();

            res.status(200).send({
                pets
            });  
        } catch (error) {
            res.status(400).send({
                error: error.sqlMessage || error.message
            })
        }
        await BaseDatabase.destroyConnection()
    };

    public async updatePet(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const input: PetInputDTO = {
                name: req.body.name,
                age: req.body.age,
                pet: req.body.pet,
                petBreed: req.body.petBreed,
                ownerName: req.body.ownerName,
                phone: req.body.phone
            }

            await PetController.PetBusiness.updatePet(id, input);

            res.status(200).send({ message: "Pet atualizado!" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    };

    public async deletePet(req: Request, res: Response) {
        try {
            const id = req.params.id;

            await PetController.PetBusiness.deletePet(id);

            res.status(200).send({ message: "Pet excluído!" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    };
};