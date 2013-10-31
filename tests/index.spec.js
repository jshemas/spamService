var app = require('../app'),
	expect = require('expect.js');

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

// what's being passed
var options1 = {'string':'test'},
	options2 = {'string':string1},
	options3 = {'string':string1,'type':typeF},
	options4 = {'string':string1,'type':typeP},
	options5 = {'string':string1,'type':test},
	options6 = {'string':empty},
	options7 = {'string':string2},
	options8 = {'string':string2,'type':typeF},
	options9 = {'string':string2,'type':typeP},
	options10 = {'string':string3},
	options11 = {'string':string3,'type':typeF},
	options12 = {'string':string3,'type':typeP};


describe('SpamCheck: ', function (done) {
	it('general test - return true', function(done) {
		app(options1, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('good var - used string 1 - no type - return true', function(done) {
		app(options2, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('good var - used string 1 - type set to full - return true', function(done) {
		app(options3, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('good var - used string 1 - type set to part - return true', function(done) {
		app(options4, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('good var - used string 1 - type set to test - return true', function(done) {
		app(options5, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('bad var - no input - return false', function(done) {
		app(options6, function(err, result){
			expect(err).to.be(true)
			expect(result.error).to.be('No String Input');
			done();
		});
	});
	it('bad var - used string 2 - no type - return false', function(done) {
		app(options7, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(true);
			done();
		});
	});
	it('bad var - used string 2 - type full - return false', function(done) {
		app(options8, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(true);
			done();
		});
	});
	it('bad var - used string 2 - type part - return false', function(done) {
		app(options9, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(true);
			done();
		});
	});
	it('bad var - used string 3 - no type  - return false', function(done) {
		app(options10, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(true);
			done();
		});
	});
	it('good var - used string 3 - type full - return true', function(done) {
		app(options11, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(false);
			done();
		});
	});
	it('bad var - used string 3 - type part - return false', function(done) {
		app(options12, function(err, result){
			expect(err).to.be(false)
			expect(result.spam).to.be(true);
			done();
		});
	});
});
