module.exports = app => {

    app.route('/animais')
        .post(app.api.animais.save)
        .get(app.api.animais.get)

    app.route('/animaisPaginado')
        .get(app.api.animais.getPaginado)

    app.route('/animais/:id')
        .put(app.api.animais.save)
        .get(app.api.animais.getById)
        .delete(app.api.animais.remove)

}