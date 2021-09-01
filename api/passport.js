const passport = require('passport'),
      JWTStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local').Strategy,
      JWTSECRET = require('./config/index').JWT_SECRET,
      User = require('./models/user')

// JWT Auth Config using bearer token
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;      

// apply to the passport instance
passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload.sub, function(error, user) {
        if (error) {
            return done(error, false);
        }

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

// local strategy auth config using username and password
const localStrategyConfig = new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username}, function(error, user) {
            if (error) {
                return done(error);
            }

            if (user) {
                return done(null, false);
            }

            if (!user.isValidPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
);

passport.user(localStrategyConfig)