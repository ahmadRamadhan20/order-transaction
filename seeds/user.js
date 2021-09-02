const mongoose = require('mongoose')
const User = require('../api/models/user')

const data = [
    {
        username: 'ahmad',
        password: 'abcde',
        role: 'user'
    },
    {
        username: 'ahmadramadhan',
        password: 'abcde',
        role: 'user'
    },
    {
        username: 'ahmadr',
        password: 'abcde',
        role: 'user'
    },
    {
        username: 'ahmadramadhan2',
        password: 'abcde',
        role: 'user'
    },
    {
        username: 'ahmad2',
        password: 'abcde',
        role: 'user'
    },
    {
        username: 'admin',
        password: 'admin',
        role: 'admin'
    }                
];

function seedDB() {
    User.remove({}, function(err) {
        if (err) {
            console.error(err)
        } else {
            console.log('all users removed succesfully')
            data.forEach(function(item) {
                User.create(item, function(err, createdUser) {
                    if (err) {
                        console.error(err);
                        console.log(`User ${createdUser.username} inserted`);
                    }
                });
            });
        }
    })
}

module.exports = seedDB;