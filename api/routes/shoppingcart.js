const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConf = require('../passport')
const ShoppingCartController = require('../controllers/shoppingcart')

//Customer can add a product to shopping cart
router.post('/', passport.authenticate('jwt', { session: false }), ShoppingCartController.addProduct);

//Customer can show their shopping cart
router.get('/', passport.authenticate('jwt', { session: false }), ShoppingCartController.showCart);

//customer can product a particular data from their shopping cart
router.delete('/:product_id', passport.authenticate('jwt', { session: false }), ShoppingCartController.deleteProduct);

module.exports = router;