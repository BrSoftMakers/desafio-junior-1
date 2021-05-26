
const Animal = require('../model/Animal')

module.exports = {
    create(req, res) {
        return res.render("animal")
    },

    async save(req, res) {
        await Animal.create({
            nome: req.body.nome,
            raca: req.body.raca,
            tipo: req.body.tipo,
            dono: req.body.dono,
            contato: req.body.contato,


        });


        return res.redirect('/')
    },

    async show(req, res) {

        const animalId = req.params.id
        const animals = await Animal.get()

        const animal = animals.find(animal => Number(animal.id) === Number(animalId))

        if (!animal) {
            return res.send('Pet não encontrado')
        }


        return res.render('animal-edit', { animal })
    },

    async update(req, res) {
        console.log(req.body)
        const animalId = req.params.id

        const updatedAnimal = {
            nome: req.body.nome,
            raca: req.body.raca,
            tipo: req.body.tipo,
            dono: req.body.dono,
            contato: req.body.contato,

        }

        await Animal.update(updatedAnimal, animalId)
        
        res.redirect('/animal/' + animalId)

    },

    async delete(req, res) {
        const animalId = req.params.id

        await Animal.delete(animalId)

        return res.redirect('/')
    }

}
