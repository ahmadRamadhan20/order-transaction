const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConf = require('../passport')
const UserController = require('../controllers/user')
const ShoppingCartController = require('../controllers/shoppingcart')
const CouponController = require('../controllers/coupon')

// customers can apply a coupon 
router.post('/', passport.authenticate('jwt', { session: false}), CouponController.addCoupon);

module.exports = router;