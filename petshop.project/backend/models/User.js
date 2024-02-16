const mongoose = require('../db/conn')
const { Schema } = mongoose

const User = mongoose.model(
    'User', new Schema(
        {
            Nome: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                required: true
            },
            Senha: {
                type: String,
                required: true
            },
            Imagem: {
                type: String
            },
            Fone: {
                type: String,
                required: true
            },

           
        },{timestamps: true},
    ),

)

module.exports = User
