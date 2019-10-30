const db = require ('../Configs/db');

module.exports = {

  showAllBook: () => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT * FROM books_table`,
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      )
    })
  },

  filterGenre: bookGenre => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT * FROM books_table WHERE genre=?`,
        [bookGenre],
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      )
    })
  },

  filterStatus: bookStatus => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT * FROM books_table WHERE status=?`,
        [bookStatus],
        (err, response) => {
          if (!err) {
            resolve (response)
          } else {
            reject (err)
          }
        }
      )
    })
  },

  addBook: body => {
    return new Promise ((resolve, reject) => {
      db.query ('INSERT INTO books_table SET ?', [body], (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err)
        }
      })
    })
  },
  
  updateBook: (body,id) => {
    return new Promise ((resolve, reject) => {
      db.query ('UPDATE books_table SET ? WHERE id = ?', ([body,id]), (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err)
        }
      })
    })
  },
  deleteBook: id => {
    return new Promise ((resolve, reject) => {
      db.query ('DELETE FROM books_table WHERE id = ?', [id], (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err)
        }
      })
    })
  }
}
