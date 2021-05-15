import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";

import Pets from "../models/Pets";

class PetsController {
    async index(req: Request, res: Response) {
        const pets = await Pets.find();
        // @ts-expect-error pet.animal
        const cachorros = pets.filter((pet) => pet.animal === "Cachorro");
        // @ts-expect-error pet.animal
        const gatos = pets.filter((pet) => pet.animal === "Gato");

        res.render("pages/index.ejs", { pets });
    }

    async indexDog(req: Request, res: Response) {
        const pets = await Pets.find();
        // @ts-expect-error pet.animal
        const cachorros = pets.filter((pet) => pet.animal === "Cachorro");
        res.render("pages/index.ejs", { pets: cachorros });
    }

    async indexCat(req: Request, res: Response) {
        const pets = await Pets.find();
        // @ts-expect-error pet.animal
        const gatos = pets.filter((pet) => pet.animal === "Gato");
        res.render("pages/index.ejs", { pets: gatos });
    }

    async showCreate(req: Request, res: Response) {
        const pets = await Pets.find();
        res.render("pages/create.ejs", { pets });
    }

    async create(req: Request, res: Response) {
        try {
            let img;
            // @ts-expect-error req.files
            if (req.files) {
                // @ts-expect-error req.files
                const { file } = req.files;
                await cloudinary.uploader.upload(
                    file.tempFilePath,
                    (err, result) => {
                        img = result.url;
                    }
                );
            }

            interface IPet {
                name: string;
                age: number;
                animal: string;
                race: number;
                img: string;
                owner: string;
                contactOwner: string;
            }
            const { name, age, animal, race, owner, contactOwner }: IPet =
                req.body;

            const pet = new Pets({
                name,
                age,
                animal,
                race,
                img,
                owner,
                contactOwner,
            });

            pet.save((err) => {
                if (err) return console.error(err);
                return console.log("Document inserted sucessufully!");
            });
        } catch (error) {
            console.log(error);
        }
        res.send(201);
    }

    async delete(req: Request, res: Response) {
        await Pets.deleteOne({ _id: req.params.id }, (err) => {
            if (err) return console.error(err);
            return console.log("Document deleted sucessufully");
        });
        res.redirect("/", 200);
    }

    async update(req: Request, res: Response) {
        const query = { _id: req.params.id };
        let img;
        let update;
        // @ts-expect-error req.files
        if (req.files) {
            // @ts-expect-error req.files
            const { file } = req.files;
            await cloudinary.uploader.upload(
                file.tempFilePath,
                (err, result) => {
                    img = result.url;
                }
            );
        }

        if (img === undefined) {
            update = {
                name: req.body.name,
                age: req.body.age,
                animal: req.body.animal,
                race: req.body.race,
                owner: req.body.owner,
                contactOwner: req.body.contactOwner,
            };
        } else {
            update = {
                name: req.body.name,
                age: req.body.age,
                animal: req.body.animal,
                race: req.body.race,
                img,
                owner: req.body.owner,
                contactOwner: req.body.contactOwner,
            };
        }
        await Pets.findOneAndUpdate(query, update);
        res.send(201);
    }
}

export default new PetsController();
