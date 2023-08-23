const { pool } = require('../config/db');


exports.getPet = async () => {
    const result = await pool.query('SELECT * FROM pet');
    return result.rows;
}

exports.getPetById = async (id) => {
    const result = await pool.query('SELECT * FROM pet WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createPet = async (pet) => {
    const result = await pool.query(`
        INSERT INTO pet (Nome, Idade, Tipo, Raca) VALUES ($1, $2, $3, $4) RETURNING *`
        , [pet.nome, pet.idade, pet.tipo, pet.raca]);
    return result.rows[0];
}


exports.updatePet = async (id, pet) => {
    const result = await pool.query('UPDATE pet SET Nome = $1, Idade = $2, Tipo = $3, Raca = $4 WHERE id = $5 RETURNING *', [pet.nome, pet.idade, pet.tipo, pet.raca, id]);
    return result.rows[0];
}


exports.deletePet = async (id) => {
     await pool.query('DELETE FROM pet WHERE id = $1', [id]);
}
