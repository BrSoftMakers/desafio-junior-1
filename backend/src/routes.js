const express = require('express')
const PetController = require('./controllers/PetController.js')
const PetOwnerController = require('./controllers/PetOwnerController.js')
const PetShopController = require('./controllers/PetShopController.js')

const routes = express.Router()

routes.post('/petOwners', PetOwnerController.store)
routes.get('/petOwners/:petOwner_id', PetOwnerController.findById)
routes.put('/petOwners/:petOwner_id', PetOwnerController.update)
routes.delete('/petOwners/:petOwner_id', PetOwnerController.removeById)

routes.post('/petshop/:petOwner_id/pets', PetController.store)
routes.get('/petshop/:petOwner_id/pets/:pet_id', PetController.findById)
routes.put('/petshop/:petOwner_id/pets/:pet_id', PetController.update)
routes.delete('/petshop/:petOwner_id/pets/:pet_id', PetController.removeById)


routes.get('/petshop', PetShopController.findAll)

module.exports = routes