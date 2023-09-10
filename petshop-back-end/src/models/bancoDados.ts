import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE!, process.env.MYSQL_ROOT_USER!, process.env.MYSQL_ROOT_PASSWORD!, {
    host: 'mysql', // localhost:3307
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conexão estabelecida!!");
}).catch(function(erro){
    console.log("conexão falha! " + erro);
});

export default sequelize;