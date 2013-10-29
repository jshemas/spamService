var express = require('express'),
	app = module.exports = express();

// configure Express
app.configure(function() {
	app.use(app.router);
});

var spamArr = ['bad','words','here','poop'];

/*
 * POST Validate - Var
 */
app.post('/validate/var', function(req, res){
	// string is the sting that needs to be check
	var string = req.param('string');

	// type can be 'full' or 'part'
	// full - the full sting has to match the full spam word
	// part - only part of the sting has to match the full spam word
	var type = req.param('type');

	// no string? reture false
	if((validateVar(string))) {
		res.json({
			success: false,
			error: 'no string input'
		});
		return;
	};

	// no type? set type to part
	if((validateVar(type))) {
		type = 'part';
	};

	// run the check!
	if(spamChecker(string, type)){
		// valid!
		res.json({
			success: true
		});
	} else {
		// invalid!
		res.json({
			success: false,
			error: 'failed spam check'
		});
	};
	return;
});

//return false if test fails(word is spam)
spamChecker  = function(string, type){
	if(type.indexOf('full') != -1) {
		for (var i = 0; i < spamArr.length; i++) {
			if(string == spamArr[i]){
				return false;
			}
		};
		return true;
	} else {
		if(string.indexOf('poop') != -1){
			return false;
		} else {
			return true;
		};
	};
};

validateVar = function(inputVar, callback) {
	if ( inputVar == null || inputVar.length < 1 || typeof inputVar === 'undefined' || !inputVar) {
		return true;
	} else {
		return false;
	};
};

// run on port 8080
app.listen(8080);
console.log("Server Running!");