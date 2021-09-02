const User 		= require('../models/user'),
			Coupon 	= require('../models/coupun');

module.exports = {

	addCoupon:
		function(req, res) {
			//get data from request
			var couponCode = req.body.code;
			var currentUser = req.user;
			var dateNow = new Date();

			Coupon.findOne({code: couponCode}, function(err, coupon) {
				if (err) {
					res.status(500).send({status: 'error', message: err});
				}
				else
				if (!coupon) {
					res.status(400).send({status: 'error', message: 'Coupon not found'});
				}
				else
				if (dateNow.getTime() < coupon.start_valid.getTime() || dateNow.getTime() > coupon.end_valid.getTime()) { 
					res.status(400).send({status: 'error', message: 'Coupon is outdated'});
				}
				else
				if (coupon.quantity <= 0) {
					res.status(400).send({status: 'error', message: 'Coupon out of stock'});
				}
				else
				if (currentUser.coupon) { //already has coupon
					res.status(400).send({status: 'error', message: 'Can only apply one coupon per order'});
				}
				else { //coupon valid
					//insert coupon to shoppin cart
					currentUser.coupon = coupon._id;
					//discount the total price that has to be paid
					console.log(coupon.percentage_discount/100);
					currentUser.totalPrice = ((100 - coupon.percentage_discount) / 100) * currentUser.totalPrice;
					currentUser.save();

					res.status(200).send({status: 'success', message: 'Coupon has been applied'});
				}
			});
		}

}
