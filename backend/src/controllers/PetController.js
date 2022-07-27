const Pet = require('../models/Pet.js')

module.exports = {
    async store(req, res) {
        const { name, age, typeOfAnimal, breedOfAnimal } = req.body
        const { petOwner_id } = req.params
        const pet = await Pet.create(
            {
                name,
                age,
                typeOfAnimal,
                breedOfAnimal,
                petOwner_id
            }
        )

        res.json(pet)
    },

    async findAll(req, res) {
        const pets = await Pet.findAll()
        res.json(pets)
    },

    async findById(req, res) {
        const { pet_id } = req.params
        const pet = await Pet.findByPk(pet_id)
        res.json(pet)
    },

    async update(req, res) {
        const { name, age, typeOfAnimal, breedOfAnimal } = req.body
        const { pet_id } = req.params

        await Pet.update(
            {
                name,
                age,
                typeOfAnimal,
                breedOfAnimal
            },
            {
                where: {
                    id: pet_id
                }
            }
        )

        const pet = await Pet.findByPk(pet_id)
        res.json(pet)
    },

    async removeById(req, res) {
        const { pet_id } = req.params

        await Pet.destroy({
            where: {
                id: pet_id
            }
        })

        const pets = await Pet.findAll()
        res.json(pets)
    }
}