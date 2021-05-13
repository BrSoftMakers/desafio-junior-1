const animalDeEstimacao = require('../model/animalDeEstimacao')

module.exports = app => {
    
    app.get('/petshop', (req,res) => {
        animalDeEstimacao.listar(res)
    })

    app.get('/petshop/:id', (req,res) =>{
        const id = parseInt(req.params.id)

        animalDeEstimacao.buscarPorId(id, res)
    })

    app.post('/petshop', (req,res) => {
        
        const formulario = req.body

        animalDeEstimacao.adicionar(formulario, res)
        
    })

    app.patch('/petshop/:id', (req,res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        animalDeEstimacao.alterar(id, valores, res)
    })

    app.delete('/petshop/:id', (req,res) =>{
        const id = parseInt(req.params.id)
    
        animalDeEstimacao.remover(id, res)
    })
    
}