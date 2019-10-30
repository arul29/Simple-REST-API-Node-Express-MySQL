const express = require ('express')
const book = require ('./book')
const Router = express.Router ()

Router.use ('/book', book)

module.exports = Router