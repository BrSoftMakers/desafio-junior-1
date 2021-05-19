const PetModel = require('../model/PetModel');

const PetValidation = async (req, res, next) => {

  const { name, age, type, breed, ownerName, ownerTel } = req.body;

  if(!name){
    return res.status(400).json({ error: 'Nome é obrigatório!' });
  }else if(!age){
    return res.status(400).json({ error: 'Idade é obrigatório!' });
  }else if(!type){
    return res.status(400).json({ error: 'Tipo é obrigatório!' });
  }else if(!breed){
    return res.status(400).json({ error: 'Raça é obrigatório!' });
  }else if(!ownerName){
    return res.status(400).json({ error: 'Nome do dono é obrigatório!' });
  }else if(!ownerTel){
    return res.status(400).json({ error: 'Telefone do dono é obrigatório!' });
  }else{
    next();
  }

}

module.exports = PetValidation;