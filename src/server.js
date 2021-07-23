const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const routes = require("./routes")
const bodyParser = require("body-parser")

/*Não seguro para por em produção segundo a documentação.*/
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  }
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"))

app.use(routes)



app.listen(3333, () => {
  console.log('server is running on port 3333')
})