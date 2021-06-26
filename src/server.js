const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))
//middleware
server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3002, () => console.log("rodando"))