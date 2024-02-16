const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet', new Schema(
        {
            Nome: {
                type: String,
                required: true
            },
            Idade: {
                type: Number,
                required: true
            },
            Peso: {
                type: Number,
                required: true
            },
            Cor: {
                type: String,
                required: true
            },
            Images: {
                type: Array,
                required: true
            },
            Disponivel:{
                type:Boolean
            },
            User: Object,
            Dono: Object,

        }, { timestamps: true },
    ),
)

module.exports = Pet
