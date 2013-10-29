var app = require('../app'),
	request = require('supertest'),
	expect = require('expect.js');

console.log("Starting Tests");

//sometimes error don't show in the log...
//http://stackoverflow.com/questions/8794008/no-stack-trace-for-jasmine-node-errors
// process.on('uncaughtException',function(e) {
// 	console.log("Caught unhandled exception: " + e);
// 	console.log(" ---> : " + e.stack);
// });

//empty value 
var empty = '';

// test value (string that contains test)
var test = 'test';

// types of checks
var typeF = 'full',
	typeP = 'part';

// some valid strings
var string1 = 'joeSmith';

// some invalid strings
var string2 = 'poop',
	string3 = 'partofpoop';


describe('POST - validate/var:', function (done) {
	it('general test - return true', function(done) {
		request(app)
			.post('/validate/var?string='+test)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good var - used string 1 - no type - return true', function(done) {
		request(app)
			.post('/validate/var?string='+string1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good var - used string 1 - type set to full - return true', function(done) {
		request(app)
			.post('/validate/var?string='+string1+'&type='+typeF)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good var - used string 1 - type set to part - return true', function(done) {
		request(app)
			.post('/validate/var?string='+string1+'&type='+typeP)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good var - used string 1 - type set to test - return true', function(done) {
		request(app)
			.post('/validate/var?string='+string1+'&type='+test)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad var - no input - return false', function(done) {
		request(app)
			.post('/validate/var?string='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad var - used string 2 - no type - return false', function(done) {
		request(app)
			.post('/validate/var?string='+string2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad var - used string 2 - type full - return false', function(done) {
		request(app)
			.post('/validate/var?string='+string2+'&type='+typeF)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad var - used string 2 - type part - return false', function(done) {
		request(app)
			.post('/validate/var?string='+string2+'&type='+typeP)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad var - used string 3 - no type  - return false', function(done) {
		request(app)
			.post('/validate/var?string='+string3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('good var - used string 3 - type full - return true', function(done) {
		request(app)
			.post('/validate/var?string='+string3+'&type='+typeF)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad var - used string 3 - type part - return false', function(done) {
		request(app)
			.post('/validate/var?string='+string3+'&type='+typeP)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('no var - return false', function(done) {
		request(app)
			.post('/validate/var')
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});
