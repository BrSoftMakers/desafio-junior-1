const express = require("express");
const server = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pet",
});

server.use(cors());
server.use(express.json());

server.post("/register", (req, res)=>{
    const { name } = req.body;
    const { age } = req.body;
    const { type } = req.body;
    const { breed } = req.body;
    const { contact } = req.body;
    const { adress } = req.body;

    let SQL = "INSERT INTO pets (name, age, type, breed, contact, adress ) VALUES ( ?,?,?,?,?,?)";


    db.query(SQL, [name, age, type, breed, contact, adress], (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    });
});

server.get("/itens", (req, res) => {

    let SQL = "SELECT * FROM pets";

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result);
    });
});

server.put("/edit", (req, res) =>{
    const {id} = req.body;
    const {name} = req.body;
    const {age} = req.body;
    const {type} = req.body;
    const {breed} = req.body;
    const {contact} = req.body;
    const {adress} = req.body;

    let SQL = "UPDATE pets SET name = ?, age = ?, type = ?, breed = ?, contact = ?, adress = ? WHERE idpets = ?";

    db.query(SQL, [name, age, type, breed, contact, adress, id], (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    });
});

server.delete("/delete/:id", (req, res) =>{
    const { id } = req.params;

    let SQL = "DELETE FROM pets WHERE idpets = ?";

    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err)
        else res.send(result);
    });
});

server.listen(3001, () =>{
    console.log("Rodando servidor");
});