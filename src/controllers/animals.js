const mongoose = require('mongoose');

const Animals = mongoose.model('Animals');


// Dashboard
exports.dashboard = async (req, res) => {
    res.render('pages/', {page:'sidebar'})
}
exports.listPet = async (req,res ) => {
    
    try {
        const data = await Animals.find({});
       
        
        res.render('pages/index', { data: data})
        
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções.'});
      }
      
}
exports.create = async (req, res) => {

    res.render('pages/petAdd')
}
exports.sucess = async (req, res) => {
    const name = req.body.petName;
    const age = req.body.petAge;
    const type = req.body.typePet;
    const breed = req.body.petRaca;
    const owner = req.body.petResponsavel;
    const owner_tel = req.body.petTelResponsavel;
   

    const animal = new Animals({
        name, 
        age, 
        type, 
        breed, 
        owner, 
        owner_tel

    })
   
    animal.save().then(() => {
              
        res.render('pages/sucess')
      }).catch((err) => {
        console.log(err)
      })

      
}
exports.detailPet = async (req, res) => {
    try {
        const data = await Animals.find({_id: req.params.id});
       
        
        res.render('pages/petDetail', { data: data})
        
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as informações.'});
      }
    
}
exports.editPet = async (req, res) => {

  try {
    const data = await Animals.find({_id: req.params.id});
   
    
    res.render('pages/petEdit', { data: data})
    
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as informações.'});
  }

}
exports.sucessEdit = async (req, res) => {
  const name = req.body.petName;
  const age = req.body.petAge;
  const type = req.body.typePet;
  const breed = req.body.petRaca;
  const owner = req.body.petResponsavel;
  const owner_tel = req.body.petTelResponsavel;
 
  var newvalues = { $set: {name: name, age: age, type: type, breed: breed, owner: owner, owner_tel: owner_tel } };
  Animals.updateOne({_id: req.params.id }, newvalues, function(err) {
    if (err) throw err;
    console.log("1 document updated");
    res.redirect('/')
    
  });
  
 
 
    
}

exports.deletePet = async (req, res) => {
  
  console.log(req.params.id)
  Animals.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.render('pages/petDelete');
  })
};