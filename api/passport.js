const passport 			= require('passport'),
			JwtStrategy 	= require('passport-jwt').Strategy,
			ExtractJwt 		= require('passport-jwt').ExtractJwt,
			LocalStrategy = require('passport-local').Strategy,
			JWT_SECRET 		= require('./config/index').JWT_SECRET,
			User 					= require('./models/user');

//JWT Authentication Configuration using Bearer Token
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;

//apply to the passport instance
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.findById(jwt_payload.sub, function(err, user){
    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
  });
}));

//Local Strategy Authentication Configuration using username and password
var localStrategyConf = new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { 
        return done(err); 
      }
      if (!user) { 
        return done(null, false); 
      }
      if (!user.isValidPassword(password)) { 
        return done(null, false); 
      }
      
      return done(null, user);
    });
  }
);

passport.use(localStrategyConf);
  
