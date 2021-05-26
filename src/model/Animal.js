
const Database = require('../db/config');

module.exports = {
    async get() {
        const db = await Database();

        const animals = await db.all(`SELECT * FROM animals`)

        await db.close();

        return animals.map(animal => ({

            id: animal.id,
            nome: animal.nome,
            raca: animal.raca,
            tipo: animal.tipo,
            dono: animal.dono,
            contato: animal.contato
        }));

    },
    async update(updatedAnimal, animalId) {
        const db = await Database()
        
        await db.run(`UPDATE animals SET 
         nome = "${updatedAnimal.nome}",
         raca = "${updatedAnimal.raca}",
         tipo = "${updatedAnimal.tipo}",
         dono = "${updatedAnimal.dono}",
         contato = "${updatedAnimal.contato}"
         WHERE id = ${animalId}
        `)

        await db.close()
    },

    async delete(id) {
       const db = await Database()

      await db.run(`DELETE FROM animals WHERE id =  ${id}`)

       await db.close()
    },

    async create(newAnimal) {
        const db = await Database()

        await db.run(`INSERT INTO animals (
            nome,
            raca,
            tipo,
            dono,
            contato
        ) VALUES (
            "${newAnimal.nome}",
            "${newAnimal.raca}",
            "${newAnimal.tipo}",
            "${newAnimal.dono}",
            "${newAnimal.contato}"
        )`)

        await db.close()
    },
};




