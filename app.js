var spamArr = require('./spam.json');

module.exports = function(options, callback){
	exports.checkSpam(options, function(err,results){
		callback(err,results);
	});
};

/*
 * check spam
 * @param string url - user input of a string
 * @param function callback
 */
exports.checkSpam = function(options, callback){
	// string is the sting that needs to be check
	var string = options.string;

	// type can be 'full' or 'part'
	// full - the full sting has to match the full spam word
	// part - only part of the sting has to match the full spam word
	var type = options.type;

	// no string? reture false
	if((validateVar(string))) {
		callback(true,{error: 'No String Input'});
	} else {
		// no type? set type to part
		if((validateVar(type))) {
			type = 'part';
		};
		// run the check!
		if(spamChecker(string, type)){
			// valid!
			callback(false,{spam: false});
		} else {
			// invalid!
			callback(false,{spam: true});
		};
	}
};

//return false if test fails(word is spam)
spamChecker  = function(string, type){
	for (var i = 0; i < spamArr.length; i++) {
		if((type.indexOf('full') != -1 && string == spamArr[i])||(string.indexOf(type.indexOf('full') == -1 && spamArr[i]) != -1)){
			return false;
		}
	};
	return true;
};

validateVar = function(inputVar, callback) {
	if ( inputVar == null || inputVar.length < 1 || typeof inputVar === 'undefined' || !inputVar) {
		return true;
	} else {
		return false;
	};
};