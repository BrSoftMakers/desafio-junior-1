const { pool } = require('../config/db');


exports.getCliente = async () => {
    const result = await pool.query(`SELECT c.id, c.nome, c.numero_contato, c.endereco, p.nome as nome_pet FROM Cliente as c
    INNER JOIN pet as p
    ON p.id = c.FK_id_Pet`);
    return result.rows;
}

exports.getClienteById = async (id) => {
    const result = await pool.query('SELECT * FROM cliente WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createCliente = async (cliente) => {
    const result = await pool.query(`
        INSERT INTO cliente (Nome, Numero_Contato, Endereco, Fk_id_Pet) VALUES ($1, $2, $3, $4) RETURNING *`
        , [cliente.nome, cliente.numero_contato, cliente.endereco, cliente.nome_pet]);
    return result.rows[0];
}


exports.updateCliente = async (id, cliente) => {
    const result = await pool.query('UPDATE cliente SET Nome = $1, Numero_Contato = $2, Endereco = $3, Fk_id_Pet = $4 WHERE id = $5 RETURNING *', [cliente.nome, cliente.numero_contato, cliente.endereco, cliente.nome_pet, id]);
    return result.rows[0];
}


exports.deleteCliente = async (id) => {
    const result = await pool.query('DELETE FROM cliente WHERE id = $1', [id]);
}
