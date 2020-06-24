const expect = require('expect.js');
const app = require('../app');

// empty value
const empty = '';

// test value (string that contains test)
const test = 'test';

// types of checks
const typeF = 'full';
const typeP = 'part';

// some valid strings
const string1 = 'joeSmith';

// some invalid strings
const string2 = 'poop';
const string3 = 'partofpoop';

// some more tests
const string4 = 'the man likes to poop';
const string5 = 'what happens if I say poop and then I say poop again';

// what's being passed
const options1 = { string: 'test' };
const options2 = { string: string1 };
const options3 = { string: string1, type: typeF };
const options4 = { string: string1, type: typeP };
const options5 = { string: string1, type: test };
const options6 = { string: empty };
const options7 = { string: string2 };
const options8 = { string: string2, type: typeF };
const options9 = { string: string2, type: typeP };
const options10 = { string: string3 };
const options11 = { string: string3, type: typeF };
const options12 = { string: string3, type: typeP };
const options13 = { string: string4 };
const options14 = { string: string5 };

console.log('jejejej');
describe('SpamCheck: ', function () {
  it('general test - return true', function (done) {
    app(options1, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('good var - used string 1 - no type - return true', function (done) {
    app(options2, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('good var - used string 1 - type set to full - return true', function (done) {
    app(options3, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('good var - used string 1 - type set to part - return true', function (done) {
    app(options4, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('good var - used string 1 - type set to test - return true', function (done) {
    app(options5, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('bad var - no input - return false', function (done) {
    app(options6, function (err, result) {
      expect(err).to.be(true);
      expect(result.error).to.be('No String Input');
      done();
    });
  });
  it('bad var - used string 2 - no type - return false', function (done) {
    app(options7, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('bad var - used string 2 - type full - return false', function (done) {
    app(options8, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('bad var - used string 2 - type part - return false', function (done) {
    app(options9, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('bad var - used string 3 - no type  - return false', function (done) {
    app(options10, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('good var - used string 3 - type full - return true', function (done) {
    app(options11, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(false);
      done();
    });
  });
  it('bad var - used string 3 - type part - return false', function (done) {
    app(options12, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('bad var - used string 4 - return false', function (done) {
    app(options13, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
  it('bad var - used string 5 - return false', function (done) {
    app(options14, function (err, result) {
      expect(err).to.be(false);
      expect(result.spam).to.be(true);
      done();
    });
  });
});
