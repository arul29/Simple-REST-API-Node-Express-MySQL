const bookModel = require ('../Models/book')
const formRes = require ('../Helpers/formRes')

module.exports = {

  showAllBook: (req, res) => {
 
    // const bookGenre = req.query.genre
    bookModel
      .showAllBook()
      .then (response => formRes.showAllBook1 (res, response, 200))
      .catch (err => console.log (err))
  },
  filterGenre: (req, res) => {
 
    const bookGenre = req.query.genre
    bookModel
      .filterGenre (bookGenre)
      .then (response => formRes.filterGenre1 (res, response, 200))
      .catch (err => console.log (err))
  },
  filterStatus: (req, res) => {
 
    const bookStatus = req.query.status
    bookModel
      .filterStatus (bookStatus)
      .then (response => formRes.filterStatus1 (res, response, 200))
      .catch (err => console.log (err))
  },
  addBook: (req, res) => {
    //  const bodyReq = req.body;
      var date = new Date()
      const body = {
        ...req.body,
        created_at: date,
        updated_at: date
      }
      // console.log(body)
      bookModel
        .addBook (body)
        .then (response => formRes.addBook1 (res, response, 200))
        .catch (err => console.log (err))
    },
    updateBook: (req, res) => {
      
        var date = new Date()
        const id = req.query.id

        // console.log('ini adalah id:',id)
        const body = {
          ...req.body,
          updated_at: date
        }
        // console.log(body)
        bookModel
          .updateBook (body,id)
          .then (response => formRes.updateBook1 (res, response, 200))
          .catch (err => console.log (err))
      },
      deleteBook: (req, res) => {
        
          const id = req.query.id
          // console.log('ini adalah id:',id)
          // const body = {
          //   ...req.body,
          //   updated_at: date
          // }
          // console.log(body)
          bookModel
            .deleteBook (id)
            .then (response => formRes.deleteBook1 (res, response, 200))
            .catch (err => console.log (err))
      }
};
