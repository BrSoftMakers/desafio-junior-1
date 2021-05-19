const PetModel = require('../model/PetModel');

class PetController {

  async create(req, res){
    const pet = new PetModel(req.body);
    await pet
      .save()
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }

  async update(req, res){
    await PetModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

  async all(req, res){
    await PetModel.find({})
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }

  async show(req, res){
    await PetModel.findById(req.params.id)
      .then(response => {
        if(response){
          return res.status(200).json(response);
        }else{
          return res.status(404).json({error: 'Pet não encontrado'});
        }
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }

  async delete(req, res){
    await PetModel.deleteOne({'_id': req.params.id})
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })

  }
}

module.exports = new PetController();