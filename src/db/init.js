const Database = require('./config')


const initDb = {
    async init() {

        const db = await Database()

        

        await db.exec(`CREATE TABLE animals(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        raca TEXT,
        tipo TEXT,
        dono TEXT,
        contato TEXT 
    )`);


        await db.run(`INSERT INTO animals (
    nome,
    raca,
    tipo,
    dono,
    contato
) VALUES (
    "Marley",
    "Labrador",
    "Cachorro",
    "Kleytton",
    "119999-2222"
);`)

await db.run(`INSERT INTO animals (
    nome,
    raca,
    tipo,
    dono,
    contato
) VALUES (
    "Felix",
    "Persa",
    "Gato",
    "Dolores",
    "112222-2222"
);`)

        await db.close()
    }
}

initDb.init()