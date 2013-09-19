var express = require('express'),
	app = express();

// configure Express
app.configure(function() {
	app.use(app.router);
});

/*
 * POST Validate - Var
 */
app.post('/validate/var', function(req, res){
	var word = req.param('word');

	if(spamChecker(word)){
		res.json({
			success: true
		});
	} else {
		res.json({
			success: false,
			error: 'failed spam check'
		});
	};
	return;
});

spamChecker  = function(word){
	console.log("spam function word:", word);
	if(word != 'poop'){
		return true;
	} else {
		return false;
	};
};

// run on port 8080
app.listen(8080);
console.log("Server Running!");