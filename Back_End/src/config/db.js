require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


const initDatabase = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS Pet (
        id SERIAL PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Idade INT NOT NULL,
        Tipo VARCHAR(255) NOT NULL,
        Raca VARCHAR(255) NOT NULL
       );
    `);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS Cliente (
        id SERIAL PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Numero_Contato VARCHAR(255) NOT NULL,
        Endereco VARCHAR(255) NOT NULL,
        FK_id_Pet INT NOT NULL,
       
        FOREIGN KEY(FK_id_Pet) REFERENCES Pet(id) ON DELETE CASCADE
       );
    `);
}

module.exports = { pool, initDatabase };
