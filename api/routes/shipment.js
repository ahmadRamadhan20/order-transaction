const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConf = require('../passport')
const ShipmentController = require('../controllers/shipment')

//Customer can track order
router.get('/:shipping_id', passport.authenticate('jwt', { session: false }), ShipmentController.trackOrder);

module.exports = router;