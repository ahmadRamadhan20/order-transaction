const User = require('../models/user')
const Product = require('../models/product')

module.exports = {
    showCart: function(req, res) {
        const userid = req.user.id;

        // find related user
        User.findById(userid).populate({ path: 'items.products'}).populate('coupon').exec(function(err, foundUser) {
            if (err) {
                res.status(500).json({ status: 'error', message: err});
            } else {
                const msg = {
                    total: foundUser.totalPrice,
                    items: foundUser.items,
                    coupon: foundUser.coupon
                };
                res.status(200).json({ status: 'success', message: msg});
            }
        });
    },

    addProduct: function(req, res) { // add product to shopping cart
        // get data from request
        const prod_id = req.body.prod_id;
        const quantity = req.body.quantity;
        const currentUser = req.user;

        // validate data
        if (!prod_id || !quantity) {
            res.status(400).json({ status: 'error', message: 'Please fill all the information required'});
        } else {
            // find related product
            Product.findOne({ prod_id: prod_id}, function(err2, foundProduct) {
                if (err2) {
                    res.status(500).json({ status: 'error', message: err2});
                } else {
                    if (!foundProduct) {
                        res.status(400).json({ status: 'error', message: 'Product not found'});
                    } else {
                        currentUser.items.push({
                            products: foundProduct._id,
                            quantity: quantity
                        });
                        currentUser.totalPrice = foundProduct.price * quantity;
                        currentUser.save();

                        res.status(200).json({ status: 'success', message: 'Product successfully added to the cart'});
                    }
                }
            });
        }
    },

    deleteProduct: function(req, res) { // delete a product from shopping cart
         const product_id = req.params.product_id;
         const currentUser = req.user;

        // populate user's product
        User.findById(currentUser.id).populate({ path: 'items.products'}).exec(function(err, foundUser) {
            if (err) {
                res.status(500).json({ status: 'error', message: err});
            } else {
                // find particular product in user's cart
                let found = false;
                for (let i = 0; i < foundUser.items.length; i++) {
                    if (foundUser.items[i].products.prod_id == product_id) {
                        found = true;
                        foundUser.items.splice(i, 1); // remove
                        foundUser.save();
                        res.status(200).json({ status: 'success', message: `Item ${product_id} successfully removed from cart`});
                    }
                }
                if (!found) {
                    res.status(400).json({ status: 'error', message: `Product ${product_id} not found`});
                }
            }
        });
    }
};