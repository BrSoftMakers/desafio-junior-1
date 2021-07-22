const mPet = require('../petModel');

module.exports = class PetDao {
    constructor() {

    };

    async listarTodos() {
        try {
            const oPets = await mPet.findAll()
            return oPets
        } catch (error) {
            return error
        }
    };

    async adicionar(pet) {
        try {
            const oPet = await mPet.create({
                nome: pet.nome,
                idade: pet.idade,
                especie: pet.especie,
                raca: pet.raca,
                nome_dono: pet.nome_dono,
                numero_dono: pet.numero_dono,
                conteudo: pet.conteudo
            })
            return oPet
        } catch (error) {
            return error
        }
    };

    async listarPet(id) {
        try {
            const oPet = await mPet.findByPk(id)
            return oPet   
        } catch (error) {
            return error
        }
    };

    async atualizar(pet) {
        try {
            const oPet = await mPet.update({
                nome: pet.nome,
                idade: pet.idade,
                especie: pet.especie,
                raca: pet.raca,
                nome_dono: pet.nome_dono,
                numero_dono: pet.numero_dono,
                conteudo: pet.conteudo
            },{
                where: {
                    id: pet.id
                }
            })
        } catch (error) {
            return error
        }
    }

    async remover(id) {
        try {
            const oPet = await mPet.destroy({
                where: {
                    id: id
                }
            })
            return oPet
        } catch (error) {
            return error
        }
    };
}