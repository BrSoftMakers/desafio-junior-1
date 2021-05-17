const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./router")
const methodOverride = require('method-override')

const server = express()

// chamado middle
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)


// motor de view - tudo que for html
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function() {
    console.log("server run")
})