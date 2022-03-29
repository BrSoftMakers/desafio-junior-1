const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const petsController = require('./src/controllers/petsController');

const { loginRequired } = require('./src/middlewares/middleware')


route.get('/', loginRequired, homeController.index); // rota da home

route.get('/login/', loginController.index); // Rotas de login
route.get('/register/', loginController.registerPage);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

route.get('/pets/novopet', loginRequired, petsController.novopet);
route.post('/register', loginRequired, petsController.register);
route.get('/pets/novopet/:id', loginRequired, petsController.updateIndex);
route.post('/:id', loginRequired, petsController.edit);
route.get('/pets/delete/:id', loginRequired, petsController.delete);

module.exports = route;