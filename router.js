const express = require('express')
const routes = express.Router()
const animals = require('./controllers/animals')

// animals
routes.get("/", function(req, res) {
    return res.redirect("/animals")
})

routes.get("/animals", animals.index)
routes.get("/animals/create", animals.create)
routes.get("/animals/:id", animals.show)
routes.get("/animals/:id/edit", animals.edit)
routes.post("/animals", animals.post)
routes.put("/animals", animals.put)
routes.delete("/animals", animals.delete)

module.exports = routes
