const User = require('../models/user')
const Coupon = require('../models/coupun')

module.exports = {
    addCoupon: function(req, res) {
        // get data from request
        const couponCode = req.body.code;
        const currentUser = req.user;
        const dateNow = new Date();

        Coupon.findOne({ code: couponCode}, function(err, coupun) {
            if (err) {
                res.status(400).send({ status: 'error', message: 'Coupun not found'});
            } else if (!coupun) {
                res.status(400).send({ status: 'error', message: 'Coupun not found'});
            } else if (dateNow.getTime() < coupun.start_valid.getTime() || dateNow.getTime() > coupun.end_valid.getTime()) {
                res.status(400).send({ status: 'error', message: 'Coupon is outdated'});
            } else if (coupun.quantity <= 0) {
                res.status(400).send({ status: 'error', message: 'Coupon out of stock'});
            } else if (currentUser.coupon) { // already has coupon
                res.status(400).send({ status: 'error', message: 'Can only apply one coupon per order'});
            } else { // coupon valid
                     // insert coupon to shoppin cart
                currentUser.coupon = coupon._id;
                console.log(coupon.percentage_discount/100);
                currentUser.totalPrice = ((100 - coupon.percentage_discount) / 100) * currentUser.totalPrice;
                currentUser.save();

                res.status(200).send({ status: 'success', message: 'Coupon has been applied'});
            }
        })
    }
}