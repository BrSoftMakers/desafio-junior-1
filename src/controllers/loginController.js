const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if (req.session.user) return res.render('index');
  return res.render('login');
};

exports.registerPage = (req, res) => {
  return res.render('register');
};

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('erro404');
  }
};

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('/');
    });
  } catch(e) {
    console.log(e);
    return res.render('erro404');
  }
};

exports.logout = function(req, res) {
  req.session.destroy();
  res.redirect('/login/');
};