const User = require('../models/user')

module.exports = class UserController{

    static async register(req, res){
        res.json('Olá Petshop!')
    }

}
