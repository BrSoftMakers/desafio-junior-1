const PetDb = require("../model/PetDb")

class PetController {

  create(req, res) {
    if (req.body == {}) {
      res.redirect('/ERRO')
    } else {
      PetDb.create({
        nome: req.body.nome,
        idade: req.body.idade,
        pet: req.body.pet,
        raca: req.body.raca,
        nomeDono: req.body.nomeDono,
        contatoDono: req.body.contatoDono
      }).then(() => res.redirect('/'))
    }
  }

  findAll(req, res) {
    PetDb.findAll().then((pets) => {
      res.render('home', { pets: pets })
    })
  }

  delete(req, res) {
    PetDb.destroy({ where: { 'id': req.params.id } })
    res.redirect('/')
  }

  edit(req, res) {
    PetDb.findOne({ where: { 'id': req.body.id } }).then((pets) => {
      pets.nome = req.body.nome,
        pets.idade = req.body.idade,
        pets.pet = req.body.pet,
        pets.raca = req.body.raca,
        pets.nomeDono = req.body.nomeDono,
        pets.contatoDono = req.body.contatoDono
      pets.save().then(() => {
        res.redirect('/')
      })
    }).catch((err) => console.log(err))
  }

  findOne(req, res) {
    PetDb.findOne({ where: { 'id': req.params.id } }).then((pets) => {
      res.render('edit', { pets: pets })
    }).catch((err) => {
      console.log(err)
    })
  }
}
module.exports = PetController