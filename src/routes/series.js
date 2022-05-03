const express = require('express')
const router = express.Router()
const serieController = require('../controllers/series')

const { authentication } = require('../utils/auth')

router.get('/', authentication, serieController.get)

router.get('/:id', authentication, serieController.getOne)

router.post('/', authentication, serieController.create)

router.delete('/:id', authentication, serieController.del)

router.put('/:id', authentication, serieController.update)

module.exports = router
