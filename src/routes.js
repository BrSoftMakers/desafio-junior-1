const express = require("express");
const routes = express.Router()
const AnimalController = require('./controllers/AnimalController')
const Animals = require("./controllers/Animals")


routes.get('/', Animals.index)

routes.get('/animal', AnimalController.create)
routes.post('/animal', AnimalController.save)
routes.get('/animal/:id', AnimalController.show)
routes.post('/animal/:id', AnimalController.update)
routes.post('/animal/delete/:id', AnimalController.delete)

module.exports = routes;

