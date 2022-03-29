exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session;
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('erro404');
    }

    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa estar logado para acessar essa página');
        req.session.save(() => res.redirect('login'));
        return;
    }
    next();
}