const JWT 				= require('jsonwebtoken'),
			User 				= require('../models/user.js'),
			JWT_SECRET 	= require('../config/index.js').JWT_SECRET;

signToken = async function(user) {
	return JWT.sign({
    iss: 'ApiAuth',   //issuer
    sub: user.id,     //subject checked
    iat: new Date().getTime(),   //issued at
    exp: new Date().setDate(new Date().getDate() + 1)   //expired at the next day
  }, JWT_SECRET)
}

module.exports = {
	register: 
		function(req, res) {
			var newUser = new User({
				username: req.body.username,
				password: req.body.password,
				role: req.body.role
			});

			User.findOne({username: newUser.username}, function(err, result) {
				if (err) {
					res.status(500).json({status: 'error', message: err });
				}

				if (result) {
					res.status(403).json({status: 'error', message: 'Username is already in use' });
				}

				newUser.save(async function(err, savedUser){
					if (err)
						res.status(500).json({status: 'error', message: 'Error in saving user' });
					else {
						var token = await signToken(savedUser);
						res.status(200).json({status: 'success', message: token });
					}
				});
			})
		},

	login: 
		async function(req, res) {
			var token = await signToken(req.user);
			res.status(200).json({status: 'success', message: token });
		}
};