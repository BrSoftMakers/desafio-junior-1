import Joi from "joi";

import Pet from "../models/Pet";

const newPetSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "O nome precisa ser do tipo texto.",
    "string.empty": "O nome não pode ser vazio.",
    "any.required": "O campo 'nome' é obrigatório."
  }),

  // Idade em anos - caso o pet não tenha completado 1 ano de idade deverá ser gravado como 0.
  age: Joi.number().min(0).required().messages({
    "number.base": "A idade precisa ser um número.",
    "number.min": "A idade não pode ser menor que 0.",
    "any.required": "O campo 'idade' é obrigatório."
  }),

  type: Joi.string().valid("cat", "dog").required().messages({
    "any.only": "O campo precisa ser 'gato' ou 'cachorro'",
    "any.required": "O campo 'tipo' é obrigatório."
  }),

  breed: Joi.string().required().messages({
    "string.base": "A raça precisa ser do tipo texto.",
    "string.empty": "A raça não pode ser vazio.",
    "any.required": "O campo 'raça' é obrigatório."
  }),

  owner: Joi.object({
    name: Joi.string().required().messages({
      "string.base": "O nome do dono precisa ser do tipo texto.",
      "string.empty": "O nome do dono não pode ser vazio.",
      "any.required": "O campo 'nome do dono' é obrigatório."
    }),

    contact: Joi.string().required().messages({
      "string.base": "O contato do dono precisa ser do tipo texto.",
      "string.empty": "O contato do dono não pode ser vazio.",
      "any.required": "O campo 'contato do dono' é obrigatório."
    })
  })
    .required()
    .messages({
      "any.required": "O campo 'dono' é obrigatório"
    })
});

class PetController {
  index(req, res) {
    try {
      const { page } = req.query;

      const pets = Pet.read(page);
      const petsTotalItems = Pet.count();      

      return res.json({
        items: pets,
        totalItems: petsTotalItems
      });
    } catch {
      res.json({
        error: true,
        message:
          "Ocorreu um erro na aplicação. Por favor, tente novamente mais tarde."
      });
    }
  }

  show(req, res) {
    try {
      const { id } = req.params;

      const pet = Pet.readByID(id);

      if (!pet) {
        return res.json({
          error: true,
          message: "Não existe um pet com esse id."
        });
      }

      return res.json(pet);
    } catch {
      res.json({
        error: true,
        message:
          "Ocorreu um erro na aplicação. Por favor, tente novamente mais tarde."
      });
    }
  }

  store(req, res) {
    try {
      const { name, age, type, breed, owner } = req.body;

      const pet = { name, age, type, breed, owner };

      Joi.attempt(pet, newPetSchema, {
        abortEarly: true
      });

      Pet.create(pet);

      return res.json({
        message: "Pet incluído com sucesso!"
      });
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        res.json({
          error: true,
          message: error.message
        });
      } else {
        res.json({
          error: true,
          message:
            "Ocorreu um erro na aplicação. Por favor, tente novamente mais tarde."
        });
      }
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const { name, age, type, breed, owner } = req.body;

      const newPet = { name, age, type, breed, owner };

      const pet = Pet.readByID(id);

      if (!pet) {
        return res.json({
          error: true,
          message: "Não existe um pet com esse id."
        });
      }

      Joi.attempt(newPet, newPetSchema, {
        abortEarly: true
      });

      Pet.update(
        {
          id
        },
        newPet
      );

      return res.json({
        message: "Pet atualizado com sucesso"
      });
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        res.json({
          error: true,
          message: error.message
        });
      } else {
        res.json({
          error: true,
          message:
            "Ocorreu um erro na aplicação. Por favor, tente novamente mais tarde."
        });
      }
    }
  }

  destroy(req, res) {    
    try {
      const { id } = req.params;

      const pet = Pet.readByID(id);

      if (!pet) {
        return res.json({
          error: true,
          message: "Não existe um pet com esse id."
        });
      }

      Pet.delete(id);

      return res.json({
        message: "Pet deletado com sucesso."
      });
    } catch {
      res.json({
        error: true,
        message:
          "Ocorreu um erro na aplicação. Por favor, tente novamente mais tarde."
      });
    }
  }
}

export default new PetController();
