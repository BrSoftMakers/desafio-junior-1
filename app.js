require("./config/db");

const express = require("express");
const home = require("./routes/home");
const pets = require("./routes/pets");
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");


app.use("/", home);
app.use("/pets", pets);

app.listen(3000, () =>{
    console.log("Running on port 3000")
})