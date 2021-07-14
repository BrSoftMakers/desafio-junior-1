module.exports = app => {
   
    app.route('/animals')
        .get(app.api.animals.get)
        .post(app.api.animals.save)

    app.route('/animals/:id')
        .get(app.api.animals.getById)
        .put(app.api.animals.save)
        .delete(app.api.animals.remove)
}