import dotenv from 'dotenv';
dotenv.config();

// Importe a função createAdminUserIfNotExists
import createAdminUserIfNotExists from './services/adminSetup';

// Chame a função createAdminUserIfNotExists para criar o usuário administrador, se necessário
createAdminUserIfNotExists();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users';
import petRoutes from './routes/pets';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.use('/user', userRoutes);
app.use('/pet', petRoutes);

// @ts-ignore
app.listen(PORT, HOST, () => {
    console.log(`Server running on https://${HOST}:${PORT}`);
});