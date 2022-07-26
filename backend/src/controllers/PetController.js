const Pet = require('../models/Pet.js')

module.exports = {
    async store(req, res) {
        const pet = await Pet.create(
            {
                name: req.body.name,
                age: req.body.age,
                typeOfAnimal: req.body.typeOfAnimal,
                breedOfAnimal: req.body.breedOfAnimal
            }
        )

        res.json(pet)
    },

    async findAll(req, res) {
        const pets = await Pet.findAll()
        res.json(pets)
    },

    async findById(req, res) {
        const pet = await Pet.findByPk(req.params.id)
        res.json(pet)
    },

    async update(req, res) {
        await Pet.update(
            {
                name: req.body.name,
                age: req.body.age,
                typeOfAnimal: req.body.typeOfAnimal,
                breedOfAnimal: req.body.breedOfAnimal
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        const pet = await Pet.findByPk(req.params.id)
        res.json(pet)
    },

    async removeById(req, res) {
        await Pet.destroy({
            where: {
                id: req.params.id
            }
        })

        const pets = await Pet.findAll()
        res.json(pets)
    }
}