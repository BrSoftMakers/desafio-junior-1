const PetDao = require('../model/DAO/pet')

module.exports = {

    async listar(req, res) {
        try {
            const oPets = await new PetDao().listarTodos()
            return res.json(oPets).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },
    
    async adicionar(req, res) {
        const oPet = req.body
        try {
            const sPet = await new PetDao().adicionar(oPet)
            return res.json(sPet).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    },

    async listarPet(req, res) {
        const oId = req.params.id
        try {
            const oPet = await new PetDao().listarPet(oId)
            return res.json(oPet).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },

    async atualizar(req, res) {
        const oPet = req.body
        try {
            const sPet = await new PetDao().atualizar(oPet)
            return res.json(sPet).status(200)
        } catch (error) {
            return res.json(error).status(500)
        }
    },
    
    async remover(req, res) {
        const oId = req.params.id
        try {
            const oPet = await new PetDao().remover(oId)
            return res.json(oPet).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    }
}