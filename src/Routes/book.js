const express = require ('express')
const bookController = require ('../Controllers/book')
const Router = express.Router ()

Router.get ('/filterstatus', bookController.filterStatus)
Router.get ('/filtergenre', bookController.filterGenre)
Router.get ('/', bookController.showAllBook)
Router.post ('/addbook', bookController.addBook)
Router.put ('/updatebook', bookController.updateBook)
Router.delete ('/deletebook', bookController.deleteBook)

module.exports = Router;