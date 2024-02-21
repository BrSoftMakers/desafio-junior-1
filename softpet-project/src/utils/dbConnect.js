import { Pool } from 'pg';

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export default async function dbConnect(){
    await pool.connect((err,client,realese)=>{
        if(err){
            return console.err ('erro na conexão do db',err.stack)
        }
        client.query('SELECT NOW()',(err,result)=>{
        realese()
        if(err){
            return console.err('erro na query',err.stack);
        }
        console.log('conectado no db postgresql !', result.rows)
        } )
        
    })
};