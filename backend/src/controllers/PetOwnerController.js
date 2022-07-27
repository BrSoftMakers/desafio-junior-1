const PetOwner = require('../models/PetOwner.js')

module.exports = {
    async store(req, res) {
        const { name, phoneNumber, zipcode, street, houseNumber } = req.body

        const petOwner = await PetOwner.create(
            {
                name,
                phoneNumber,
                zipcode,
                street,
                houseNumber
            }
        )

        res.json(petOwner)
    },

    async findAll(req, res) {
        const petOwners = await PetOwner.findAll()
        res.json(petOwners)
    },

    async findById(req, res) {
        const { petOwner_id } = req.params
        const petOwner = await PetOwner.findByPk(petOwner_id)
        res.json(petOwner)
    },

    async update(req, res) {
        const { name, phoneNumber, zipcode, street, houseNumber } = req.body
        const { petOwner_id } = req.params

        await PetOwner.update(
            {
                name,
                phoneNumber,
                zipcode,
                street,
                houseNumber
            },
            {
                where: {
                    id: petOwner_id
                }
            }
        )

        const petOwner = await PetOwner.findByPk(petOwner_id)
        res.json(petOwner)
    },

    async removeById(req, res) {
        const { petOwner_id } = req.params

        await PetOwner.destroy({
            where: {
                id: petOwner_id
            }
        })

        const petOwners = await PetOwner.findAll()
        res.json(petOwners)
    }
}