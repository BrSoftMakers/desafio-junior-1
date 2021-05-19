const express = require('express');
const server = express();
server.use(express.json());
const cors = require('cors');
server.use(cors());

const PetRoutes = require('./routes/PetsRoutes');
server.use('/pet', PetRoutes);

server.listen(3333, () => {
  console.log('--- API ONLINE ---');
});