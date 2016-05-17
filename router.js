const passport = require('passport');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

//by default, passport tries to provide a session cookie, so we are setting it to false
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false}); 

module.exports = function(app) {
	app.get('/', requireAuth, function(req, res) {
		res.send({ hi: 'there'});
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
}