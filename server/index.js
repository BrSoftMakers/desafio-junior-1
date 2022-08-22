const express = require("express")
const app = express()
const db = require("./models/db")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/pets", (req, res) => { 
  const SQL = `SELECT * FROM PETS`
  
  db.query(SQL, async (err, result) => {
    if (err) {
        console.log(err)
    }
    const resultt = await result
    res.send(resultt)
  })
})

app.post("/pets", (req, res) => {
  const { name } = req.body
  const { age } = req.body
  const { type } = req.body
  const { race } = req.body
  const { owner } = req.body
  const { address } = req.body

  const SQL = `INSERT INTO pets (name, age, type, race, owner, address) VALUES (?,?,?,?,?,?)`

  db.query(SQL, [name, age, type, race, owner, address], (err, response) => {
    if (err) {
        res.send("erro =>", err)
    }

    res.send(response)    
  })
})

app.put('/pets', (req, res) => {
    const { name } = req.body
    const { age } = req.body
    const { type } = req.body
    const { race } = req.body
    const { owner } = req.body
    const { address } = req.body
    
    const SQL = `UPDATE pets SET name = ?, age = ?, type = ?, race = ?, owner = ?, address = ? WHERE (id = ${req.body.id});`

    db.query(SQL, [name, age, type, race, owner, address], (err, response) => {
        if (err) console.log(err)

        res.send(response)
    })
})

app.delete('/pets/:id', (req, res) => {
    const { id } = req.params

    const SQL = `DELETE FROM pets WHERE (id = ${id})`

    db.query(SQL, (err, response) => {
        if (err) {
            console.log(err)
        }
        res.send(response)
    })
})

app.listen(3001, () => {
  console.log("listening to http://localhost:3001")
})
