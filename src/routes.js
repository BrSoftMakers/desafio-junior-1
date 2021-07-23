const express = require("express")
const routes = express.Router();
const PetDb = require("./model/PetDb")
const PetController = require("./controller/PetController")
const petController = new PetController();




routes.get('/', petController.findAll)

routes.get('/add', (req, res) => res.render(`add`))
routes.post('/add', petController.create)

routes.get('/delet/:id', petController.delete)

routes.get('/edit/:id', petController.findOne)
routes.post('/edit', petController.edit)




module.exports = routes;