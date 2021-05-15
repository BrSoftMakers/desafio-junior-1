const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
var http = require('http');
var consign = require('consign');


const app = express();


// App





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use('/edit', express.static(__dirname + '/public'));
app.use('/delete', express.static(__dirname + '/public'));
consign()
    .include('routes')

const middlewares = [
    // ...
    bodyParser.urlencoded({ extended: true }),
  ];



mongoose.connect('mongodb://localhost/petshop',  {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
}
);
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
   
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});


// Load models
const Animals = require('./models/animals');




// Load routes

const indexRoutes = require('./routes/index');
const edit = require('./routes/edit');

app.use('/', indexRoutes);
app.use('/edit', indexRoutes);




module.exports = app;