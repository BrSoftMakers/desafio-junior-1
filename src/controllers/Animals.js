
const Animal = require('../model/Animal')

module.exports = {
      async index(req, res) {
            const animals = await Animal.get();
    
            return res.render('index', { animals })
        },
    };
