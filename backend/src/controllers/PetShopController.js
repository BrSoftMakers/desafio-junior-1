const PetOwner = require('../models/PetOwner.js')

module.exports = {
    async findAll(req, res) {
        const pets = await PetOwner.findAll({
            atributes: ['name', 'phoneNumber', 'zipcode', 'street', 'houseNumber'],
            include: ['pets']

        })

        return res.json(pets)
    }
}