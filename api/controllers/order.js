const Order = require('../models/order')
const Product = require('../models/product')
const Coupon = require('../models/coupun')
const Payment = require('../models/payment')
const User = require('../models/user')

module.exports = {
    showOrder: function(req, res) {
        // find related user and populate it's data
        Order.find({user: req.user.id}).populate({path: 'items.product'})
        .populate('coupon')
        .populate('payment')
        .exec(function(err, foundOrder) {
            if (err) {
                res.status(500).json({status: 'error', message: err});
            } else {
                res.status(200).json({status: 'success', message: foundOrder});
            }
        });
    },

    submitOrder: function(req, res) {
        const currentUser = req.user;
        // check if all information required are given
        const check = req.body.name && req.body.phoneNumber && req.body.email && req.body.address;

        if (!check) {
            res.status(400).json({status: 'error', message: 'Please fill all the information'});
        } else { // order valid, create order data from request body
            const newOrder = {
                user: currentUser.id,
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                address: req.body.address,
                totalPrice: currentUser.totalPrice,
                items: currentUser.items,
                coupon: currentUser.coupon
            };

            Order.create(newOrder, function(err, createdOrder) {
                if (err) {
                    res.status(500).json({ status: 'error', message: err});
                } else { // decrease the quantity of ordered products by quantity
                    newOrder.items.forEach(function(item) {
                        Product.findById(item.products, function(err2, foundProduct) {
                            if (err2) {
                                res.status(500).json({ status: 'error', message: err2});
                            } else {
                                foundProduct.stock -= item.quantity;
                                foundProduct.save();
                            }
                        });
                    });

                    // if there's coupon used
                    if (newOrder.coupon) {
                        // decrease the quantity of used coupon by 1
                        Coupon.findById(newOrder.coupon, function(err2, foundCoupon) {
                            if (err2) {
                                res.status(500).json({ status: 'error', message: err2});
                            } else {
                                foundCoupon.stock -= 1;
                                foundCoupon.save();
                            }
                        });
                    }

                    // delete current user's shopping cart
                    currentUser.totalPrice = 0;
                    currentUser.items = [];
                    currentUser.coupon = null;
                    currentUser.save();

                    res.status(200).json({
                        status: 'success',
                        message: 'Order submitted, ready for payment',
                        orderid: createdOrder.id
                    });
                }
            });
        }
    },

    verifyPayment: function(req, res) {
        // get data from body request
        const order_id = req.params.order_id;
        const newPayment = {
            bank: req.body.bank,
            account_number: req.body.account_number,
            name: req.body.mame
        };

        // validate input
        if (!newPayment.bank || !newPayment.account_number || !newPayment.name) {
            res.status(400).json({ status: 'error', message: 'Please fill all the infomration'});
        } else {
            Payment.create(newPayment, function(err, createdPayment) {
                if (err) {
                    res.status(500).json({ status: 'error', message: err});
                } else {
                    // find related order and change it's status
                    Order.findById(order_id, function(err2, foundOrder) {
                        if (err2) {
                            res.status(500).json({ status: 'error', message: err});
                        } else if (!foundOrder) { // related order not found
                            res.status(400).json({ status: 'error', message: 'Order not found'});
                        } else {
                            foundOrder.payment = createdPayment.id;
                            foundOrder.status = 'Waiting for verification';
                            foundOrder.save();
                            res.status(200).json({ status: 'success', message: 'Verification received'});
                        }
                    });
                }
            });
        }
    }
};