const Pets = require('../models/PetsModel');

exports.index = async(req, res) => {
    try {
        const pets = await Pets.procuraPets();
        res.render('index', { pets });
    } catch(e) {
        console.log(e);
        return res.render('erro404');
    }
};