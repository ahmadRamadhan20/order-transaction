const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConf = require('../passport')
const UserController = require('../controllers/users')

//Users can register
router.post('/register', UserController.register);

//Users can login
router.post('/login', passport.authenticate('local', { session: false }), UserController.login);

module.exports = router;