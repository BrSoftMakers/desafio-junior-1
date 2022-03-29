const mongoose = require('mongoose');
const { async } = require('regenerator-runtime');

const PetsSchema = new mongoose.Schema({
    petname: { type: String, required: true },
    age: { type: String, required: true },
    animal: { type: String, required: true },
    breed: { type: String, required: true },
    ownername: { type: String, required: true },
    ownerphone: { type: String, required: true }
});

const PetsModel = mongoose.model('Pets', PetsSchema);

function Pets (body) {
        this.body = body;
        this.errors = [];
        this.pet = null;
};

Pets.procuraId = async function(id) {
        if (typeof id !== 'string') return;
        const pet = await PetsModel.findById(id);
        return pet;
};

Pets.procuraPets = async function() {
        const pets = await PetsModel.find();
        return pets;
};

Pets.prototype.register = async function() {
        this.valida();

        if (this.errors.length > 0) return;

        this.pet = await PetsModel.create(this.body);
};

Pets.prototype.valida = function() {
        this.cleanUp();

        if (!this.body.petname) this.errors.push('O campo nome é obrigatório');
        if (!this.body.age) this.errors.push('O campo idade é obrigatório');
        if (!this.body.animal) this.errors.push('O campo tipo de pet é obrigatório');
        if (!this.body.breed) this.errors.push('O campo raça é obrigatório');
        if (!this.body.ownername) this.errors.push('O campo nome do dono é obrigatório');
        if (!this.body.ownerphone) this.errors.push('O campo telefone de contato é obrigatório');

};

Pets.prototype.cleanUp = function() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            petname: this.body.petname,
            age: this.body.age,
            animal: this.body.animal,
            breed: this.body.breed,
            ownername: this.body.ownername,
            ownerphone: this.body.ownerphone
        }

};

Pets.prototype.edit = async function(id) {
    if (typeof id !== 'string') return;
    this.valida();
    if (this.errors.length > 0) return;
    this.pet = await PetsModel.findByIdAndUpdate(id, this.body, { new: true });
};

Pets.delete = async function(id) {
    if (typeof id !== 'string') return;
    const pet = await PetsModel.findOneAndDelete({_id: id});
    return pet;
};

module.exports = Pets;