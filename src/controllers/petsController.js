const { async } = require('regenerator-runtime');
const Pets = require('../models/PetsModel');

exports.novopet = (req, res) => {
    return res.render('novopet', {
        pet: {}
    });
}

exports.register = async(req, res) => {
    try {
        const pet = new Pets(req.body);
        await pet.register();

        if (pet.errors.length > 0) {
            console.log(req.body);
            console.log(pet.errors);
            req.flash('errors', pet.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }

        req.flash('success', 'Pet registrado com sucesso');
        req.session.save(() => res.redirect(`/`));
        return;
    } catch (e) {
        console.log(e);
        return res.render('erro404');
    }
}

exports.updateIndex= async(req, res) => {
    if (!req.params.id) return res.render('erro404');

    const pet = await Pets.procuraId(req.params.id);

    if (!pet) return res.render('erro404');

    return res.render('novopet', { pet });
}

exports.edit = async(req, res) => {
    try {
        if (!req.params.id) return res.render('erro404');
        const pet = new Pets(req.body);
        await pet.edit(req.params.id);
    
        if (pet.errors.length > 0) {
            console.log(pet.errors);
            req.flash('errors', pet.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
    
        req.flash('success', 'As informações foram atualizadas com sucesso');
        req.session.save(() => res.redirect('/'));
        
        return;
    } catch(e) {
        console.log(e);
        return res.render('erro404');
    }
}

exports.delete = async (req, res) => {
    try {
        if (!req.params.id) return res.render('erro404');
        const pet = await Pets.delete(req.params.id);
        if (!pet) return res.render('erro404');
        req.flash('success', 'Informações apagadas.');
        req.session.save(() => res.redirect('back'));
        return;

    } catch (e) {
        console.log(e);
        return res.render('erro404');
    }
}