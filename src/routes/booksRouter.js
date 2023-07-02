const { Router } = require('express')
const { getBooks } = require('../controllers/booksController')
const router = Router()

router.get('/', getBooks)

module.exports = router
