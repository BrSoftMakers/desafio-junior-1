const fs = require('fs')
const data = require("../data.json")
const {age, date} = require("../utils")


// shorthand
// module.exports = {
//     index(req, res){},
//     show(req, res){},
//     create(req, res){},
// }

exports.index =  function(req, res) {
    return res.render("animals/index", {animals: data.animals})
}

exports.show = function (req, res) {
    // send direto para url
    const {id} = req.params

    const foundanimal = data.animals.find(function(animals) {
        return animals.id == id
    })
    
    if(!foundanimal) return res.send("Not found")

    const animals = {
        // espalhamento everything inside foundanimal
        ... foundanimal,
        age: age(foundanimal.birth),
        raca: foundanimal.raca.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundanimal.created_at)
    }

    return res.render("animals/show", {animals})
}

exports.create = function(req, res) {
    return res.render("animals/create")
}

// create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Preencha os campos')
        }
    }

    let {avatar_url, name, birth, gender, raca} = req.body

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.animals.length + 1);

    // add body para o array
    data.animals.push({
        avatar_url,
        name, 
        birth, 
        gender, 
        raca,
        created_at,
        id
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write file error")

        return res.redirect("/animals")
    })    
}

exports.edit = function(req, res) {
    const {id} = req.params

    const foundanimal = data.animals.find(function(animals) {
        return animals.id == id
    })
    
    if(!foundanimal) return res.send("Not found")

    const animals = {
        ...foundanimal,
        birth: date(foundanimal.birth).iso
    }

    return res.render("animals/edit", {animals})
}

exports.put = function(req, res) {
    const {id} = req.body
    let index = 0

    const foundanimal = data.animals.find(function(animals, foundIndex) {
        if (id == animals.id) {
            index = foundIndex
            return true
        }
    })
    
    if(!foundanimal) return res.send("Not found")

    const animal =  {
        ...foundanimal,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.animals[index] = animal

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error")

        return res.redirect(`/animals/${id}`)
    })
}

exports.delete = function(req, res) {
    const {id} = req.body

    const filteredanimal = data.animals.filter(function(animals) {
        return animals.id != id
    })

    data.animals = filteredanimal

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/animals")
    })

}