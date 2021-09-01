const { Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const Product = require('./product')
const Coupon = require('./coupun')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    totalPrice: Number,

    items: [{
        products: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number
    }],

    coupon: {
        type: Schema.Types.ObjectId,
        ref: 'Coupun'
    }
});

// hash password on save
userSchema.pre('save', function(next) {
    try {
        const salt = bcrypt.genSaltSync(18);
        const passwordHash = bcrypt.hashSync(this.password, salt);
        this.password = passwordHash;
        next();
    } catch(err) {
        next(err);
    }
});

// add method which checks password using hashing
userSchema.methods.isValidPassword = function(newPassword) {
    return bcrypt.compareSync(newPassword, this.password)
};

module.exports = model('User', userSchema);