require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

mongoose.connect(process.env.STRINGCONNECTION, { useNewUrlParser: true })
    .then(() => {
        app.emit('ready');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env["SESSION_SECRET"],
    store: MongoStore.create({ mongoUrl: process.env.STRINGCONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
const csrf = require('csurf');

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('ready', () => {

    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000');
        console.log('Acesso em http://localhost:3000');
    });
})