const express = require('express')
const router = express.Router()
const passport = require('passport')
const pasportConf = require('../passport')
const OrderController = require('../controllers/order')

// customers can view all of his/her orders
router.get('/', passport.authenticate('jwt', { session: false}), OrderController.showOrder);

//Customer can submit an order
router.post('/', passport.authenticate('jwt', { session: false }), OrderController.submitOrder);

//Customer can verify payment of an order
router.post('/:order_id', passport.authenticate('jwt', { session: false }), OrderController.verifyPayment);

module.exports = router;