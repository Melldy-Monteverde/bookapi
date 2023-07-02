const { Router } = require('express')
const { getRoot } = require('../controllers/indexController')
const router = Router()

router.get('/', getRoot)

module.exports = router