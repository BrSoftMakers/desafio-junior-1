require('dotenv').config();
const express = require('express');
const { initDatabase } = require('./config/db');
const cors = require('cors');

const petRoute = require('./routes/petRoute');
const clientRoute = require('./routes/clientRoute');


const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('api para petshop softmaker');
});

app.use(cors());

app.use(express.json());

app.use('/api/pet', petRoute);
app.use('/api/cliente', clientRoute);

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})