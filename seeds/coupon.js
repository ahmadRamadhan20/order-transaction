const mongoose = require('mongoose')
const Coupon = require('../api/models/coupun')

const data = [
    {
        code: 'XHAHAUUOK',
        percentage_discount: 30,
        quantity: 100,
        start_valid: new Date('2021-09-02'),
        end_valid: new Date('2021-09-31')
    },

    {
        code: 'KUPONWOWBANGET',
        percentage_discount: 99,
        quantity: 0,
        start_valid: new Date('2021-10-02'),
        end_valid: new Date('2021-10-22')
    },

    {
        code: 'KUPONWOWAJA',
        percentage_discount: 50,
        quantity: 5,
        start_valid: new Date('2021-11-01'),
        end_valid: new Date('2021-12-01')
    }
];

function seedDB() {
    Coupon.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('all coupon removed successfully')
            data.forEach(function(item) {
                Coupon.create(item, function(err, createdItem) {
                    if (err) {
                        console.log(err);
                        console.log(`Coupon ${createdItem.code} inserted`);
                    }
                });
            });
        }
    })
}

module.exports = seedDB;