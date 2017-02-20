module.exports = function(app) {
	app.get('/', function(req, res, next){
		res.send("HELLO Homepage");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, thanks for signing up!");
	});

};