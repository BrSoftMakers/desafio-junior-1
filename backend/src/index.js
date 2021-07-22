const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ 
    extended: true
}))

app.use(express.json())

// Routes
const petRouter = require('./routes/petRouter')

app.use('/pets', petRouter)


const port = 3001
const uri = "http://localhost:"
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${uri}${port}`)
})