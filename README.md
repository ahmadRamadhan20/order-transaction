# Order Transaction API

## Technology
NodeJS , Express, MongoDB

## Features
<ol>
<li>Order transaction involves the following actors: customer and admin.</li>
<li>Product has quantity; product with quantity 0 can not be ordered</li>
<li>Coupon has certain date range validity and quantity</li>
<li>Coupon has certain amount of discount, can be percentage or nominal</li>
<li>Coupon can be applied to order before submission</li>
<li>Order transaction process flow and verification; single transaction has the following steps:</li>
<li>Customer can add product to an order</li>
<li>Customer can apply one coupon to order, only one coupon can be applied to order</li>
<li>Customer can submit an order and the order is finalized</li>
<li>Customer can only pay via bank transfer</li>
<li>When placing order the following data is required: name, phone number, email, address</li>
<li>When an order is submitted, the quantity for ordered product will be reduced based on the quantity.</li>
<li>When an order is submitted, the quantity of the coupon will be reduced based on the applied coupon</li>
<li>An order is successfully submitted if fulfills all of the following condition:</li>
<li>Applied coupon is valid</li>
<li>All ordered products is available.</li>
<li>After an order is submitted, customer will be required to submit payment proof</li>
<li>After an order is submitted, the order is accessible to admin and ready to be processed</li>
<li>Admin can view order detail</li>
<li>Admin can verify the validity of order data: customer name, phone, email, address, payment proof</li>
<li>Given an order is valid, then Admin will prepare the ordered items for shipment</li>
<li>Given and order is invalid, then Admin can cancel the order</li>
<li>After an order ready for shipment, Admin ship process ordered items via logistic partner</li>
<li>After shipping the ordered items via logistic partner, Admin will mark the order as shipped and update the order with Shipping ID</li>
<li>Customer can check the order status for the submitted order</li>
<li>Customer can check the shipment status for the submitted order using Shipping ID</li>
</ol>

Additional Assumptions :
<ol>
<li>Only one coupon can be applied per order. After it's applied, user can't change coupon.</li>
<li>Updating shipping status is considered out of scope of this web API, which only handles Order Transaction</li>
</ol>

## Installation

### Download

1. [Node.js](https://nodejs.org/en/)
2. [Mongodb](https://www.mongodb.com/)

### Steps
0. Run your mongoDB first, open CMD and type 'mongod'
1. In main directory, open terminal and type 'npm install'
2. Run program with 'node server.js'
3. Now you can start request to http://localhost:3000/
4. Run test with 'npm test'

## Documents

- **[User](https://github.com/gejimayu/transactionservice/blob/master/documents/users.md)**
- **[Shopping Cart](https://github.com/gejimayu/transactionservice/blob/master/documents/shoppingcart.md)**
- **[Order](https://github.com/gejimayu/transactionservice/blob/master/documents/order.md)**
- **[Shipment](https://github.com/gejimayu/transactionservice/blob/master/documents/shipment.md)**
- **[Coupon](https://github.com/gejimayu/transactionservice/blob/master/documents/coupon.md)**
- **[Admin](https://github.com/gejimayu/transactionservice/blob/master/documents/admin.md)**

