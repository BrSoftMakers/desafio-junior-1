/*Dependencias da aplicação do servidor*/

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

/* Configuração de conexão*/
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "petshop"
});

/*Passando dados do front para o back */
app.use(cors());
app.use(express.json());

/* Serviço de envio de dados*/
app.post("/sucesso", (req, res) => {
  const { nome_pet } = req.body;
  const { raca_pet } = req.body;
  const { idade_pet } = req.body;
  const { tipo_pet } = req.body
  const { nome_dono } = req.body;
  const { telefone_dono } = req.body;
  const { endereco_dono } = req.body;

  let SQL = "INSERT INTO pets (nome_pet, raca_pet, idade_pet ,tipo_pet, nome_dono, telefone_dono, endereco_dono) VALUES (?,?,?,?,?,?,?)";

  db.query(SQL, [nome_pet, raca_pet, idade_pet, tipo_pet, nome_dono, telefone_dono, endereco_dono], (err, result) => {
    if (err)
      console.log(err)
  });
});

/* Serviço de consulta geral de dados*/
app.get("/consultar", (req, res) => {

  let SQL = "SELECT * FROM pets";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

/* Serviço de consulta especifica pelo id*/
app.get("/editar/:id", (req, res) => {

  const { id } = req.params;

  let SQL = "SELECT * FROM pets WHERE id = ?";

  db.query(SQL, [id],  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

/* Serviço de edição especifica pelo id*/
app.put("/editado", (req, res) => {

  const { id } = req.body;
  const { nome_pet } = req.body;
  const { raca_pet } = req.body;
  const { idade_pet } = req.body;
  const { tipo_pet } = req.body;
  const { nome_dono } = req.body;
  const { telefone_dono } = req.body;
  const { endereco_dono } = req.body;

  let SQL = 'UPDATE `pets` SET `nome_pet` = ?, `raca_pet` = ?, `idade_pet` = ?, `tipo_pet` = ?, `nome_dono` = ?, `telefone_dono` = ?, `endereco_dono` = ? WHERE `id` = ?';


  db.query(SQL, [nome_pet, raca_pet, idade_pet, tipo_pet, nome_dono, telefone_dono, endereco_dono, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(id)
      console.log(nome_dono)
      console.log(raca_pet)
      console.log(idade_pet)
      console.log(tipo_pet)
      console.log(nome_dono)
      console.log(telefone_dono)
      console.log(endereco_dono)
    }
  })
})

/* Serviço de exclusão pelo id*/
app.delete("/excluido/:id", (req, res) => {
  const { id } = req.params

  let SQL = "DELETE FROM pets WHERE id = ?"

  db.query(SQL, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

/*Configurando porta da aplicação */
app.listen(3001, () => {
  console.log("Rodando server");
});