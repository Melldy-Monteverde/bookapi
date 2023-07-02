const books = require('../db/booksRoter.json')

const getBooks = (req, res) => {
  res
    .status(200)
    .json({
      ok: true,
      status: 200,
      data: books
    })
}

module.exports = {
  getBooks
}
