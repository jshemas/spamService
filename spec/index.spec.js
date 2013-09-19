var request = require('supertest'),
	expect = require('expect.js');

console.log("Starting Tests");

//enter your domain
var baseURL = "http://localhost:8080/";

//sometimes error don't show in the log...
//http://stackoverflow.com/questions/8794008/no-stack-trace-for-jasmine-node-errors
process.on('uncaughtException',function(e) {
	console.log("Caught unhandled exception: " + e);
	console.log(" ---> : " + e.stack);
});

//empty value 
var empty = '';

// test value (string that contains test)
var test = 'test';

// some valid words
var word1 = 'joeSmith';

// some invalid words
var word2 = 'poop';

describe('POST - validate/var:', function (done) {
	it('good var', function(done) {
		request(baseURL)
			.post('validate/var?word='+test)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good var - used word 1', function(done) {
		request(baseURL)
			.post('validate/var?word='+word1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad var - used word 2', function(done) {
		request(baseURL)
			.post('validate/var?word='+word2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});
