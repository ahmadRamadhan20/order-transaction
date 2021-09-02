const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const UserRoutes = require('./api/routes/users')
const ShoppingcartRoutes = require('./api/routes/shoppingcart')
const CouponRoutes = require('./api/routes/coupon') 
const OrderRoutes = require('./api/routes/order')
const AdminRoutes = require('./api/routes/admin')
const ShipmentRoutes = require('./api/routes/shipment')
const seedCoupon = require('./seeds/coupon')
const seedProduct = require('./seeds/product')
const seedUser = require('./seeds/user') 
const app = express()
const config = require('config')


//INITIALIZATION

//db connection      
mongoose.connect('mongodb://localhost/salestock');

//body parser for post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('dev')); 
}

// Use the passport package in our application
app.use(passport.initialize());

//seed database
seedCoupon();
seedProduct();
seedUser();

//SET ROUTING
app.use('/', UserRoutes);
app.use('/coupons', CouponRoutes);
app.use('/shoppingcart', ShoppingcartRoutes);
app.use('/order', OrderRoutes);
app.use('/admin', AdminRoutes);
app.use('/track', ShipmentRoutes);

//lLISTEN TO REQUEST
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server listening at ' + port);

module.exports = app; // for testing