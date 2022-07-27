const express = require('express')
const PetController = require('./controllers/PetController.js')
const PetOwnerController = require('./controllers/PetOwnerController.js')
const PetShopController = require('./controllers/PetShopController.js')

const routes = express.Router()

routes.post('/petOwners', PetOwnerController.store)
routes.get('/petOwners/:petOwner_id', PetOwnerController.findById)
routes.put('/petOwners/:petOwner_id', PetOwnerController.update)
routes.delete('/petOwners/:petOwner_id', PetOwnerController.removeById)

routes.post('/petOwners/:petOwner_id/pets', PetController.store)
routes.get('/petOwners/pets/:pet_id', PetController.findById)
routes.put('/petOwners/pets/:pet_id', PetController.update)
routes.delete('/petOwners/pets/:pet_id', PetController.removeById)

routes.get('/petshop', PetShopController.findAll)

module.exports = routes