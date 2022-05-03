const router = require('express').Router()

const users = require('./users')
const series = require('./series')

const jwt = require('jsonwebtoken')
const jwtSecret = 'mysecret'

router.get('/', (req, res) => res.send('RestAPI'))
router.use('/users', users)
router.use('/series', series)

module.exports = router