const PetOwner = require('../models/PetOwner.js')

module.exports = {
    async store(req, res) {
        const petOwner = await PetOwner.create(
            {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                zipcode: req.body.zipcode,
                street: req.body.street,
                houseNumber: req.body.houseNumber
            }
        )

        res.json(petOwner)
    },

    async findAll(req, res) {
        const petOwners = await PetOwner.findAll()
        res.json(petOwners)
    },

    async findById(req, res) {
        const petOwner = await PetOwner.findByPk(req.params.id)
        res.json(petOwner)
    },

    async update(req, res) {
        await PetOwner.update(
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
        
        const petOwner = await PetOwner.findByPk(req.params.id)
        res.json(petOwner)
    },

    async removeById(req, res) {
        await PetOwner.destroy({
            where: {
                id: req.params.id
            }
        })

        const petOwners = await PetOwner.findAll()
        res.json(petOwners)
    }
}