const express = require('express');
const app = express();
const consign = require('consign');
const db = require('./config/db')

app.db = db

consign()
.then('./config/middlewares.js')
.then('./api/validations.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => res.sendFile('index.html'));

app.listen(3000, () => {
    console.log("backend running")
})