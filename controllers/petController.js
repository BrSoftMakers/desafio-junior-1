const Pet = require("../models/petModel");

exports.home = (req, res) =>{
    res.render("home");
}

exports.createPet = (req, res) =>{
    const { animalType, petName, petAge, breed, ownerName, ownerContact } = req.body;

    const newPet = new Pet({
        petName: petName,
        petAge: petAge,
        animalType: animalType,
        breed: breed,
        ownerName: ownerName,
        ownerContact: ownerContact
    });

    newPet.save();
    res.render("home");
}

exports.pets = (req, res) =>{
    Pet.find({}, (err, found) =>{
        if(err){
            res.send(err);
            
        }else{
            res.render("pets", {petsFound: found});
        }
    });
    
}

exports.update = (req, res) =>{
    Pet.findOne({_id: req.params.id}, (err, petsFounded) =>{
        if(err){
            res.send(err);
        }else{

            res.render("petUpdate", {id: req.params.id, petsValue: petsFounded});
        }
    });
}

exports.petUpdate = (req, res) =>{
    const petId = req.params.id;

    const { animalType, petName, petAge, breed, ownerName, ownerContact } = req.body;
    
    Pet.findOne({_id: petId}, (err, petsFounded) =>{
        if(err){
            res.send(err);
        }else{
            Pet.findOneAndUpdate(
                {_id: petId},
                {
                    petName: petName || petsFounded.petName,
                    petAge: petAge || petsFounded.petAge,
                    animalType: animalType || petsFounded.animalType,
                    breed: breed || petsFounded.breed,
                    ownerName: ownerName || petsFounded.ownerName,
                    ownerContact: ownerContact ||petsFounded.ownerContact
                },

                err =>{
                    if(err){
                        res.send(err);
                    }else{
                        
                        res.render("petUpdate", {id: req.params.id, petsValue: petsFounded});
                    }
                }
            );
        }
    });
    
}

exports.petDelete = (req, res) =>{
    const petId = req.params.id;

    Pet.findByIdAndDelete(petId, err =>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/pets");
        }
    })
    
}
