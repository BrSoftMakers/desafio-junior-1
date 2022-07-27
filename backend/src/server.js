const express = require('express')
const routes = require('./routes.js')
const database = require('./infrastructure/database.js')

const app = express()

app.use(express.json())
app.use(routes)

database.sync(() => console.log('database conectado com sucesso'))

app.listen(3000, () => console.log("executando server na porta 3000"))