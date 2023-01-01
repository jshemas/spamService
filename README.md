# spamCheck

[![Node.js CI](https://github.com/jshemas/spamService/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/jshemas/spamService/actions?query=branch%3Amaster)
[![Known Vulnerabilities](https://snyk.io/test/github/jshemas/spamService/badge.svg)](https://snyk.io/test/github/jshemas/spamService)

A simple node module for checking for spam in user inputs. This module comes with a full list of spam words!

## Installation

```bash
npm install spam-check
```

## Usage

```javascript
var spamCheck = require('spam-check');
var options = {'string':'poop'};
spamCheck(options, function(err, results) {
  console.log("err:",err);
  console.log("results:",results);
});
```

You can also set a type flag for either full matches or partial matches. Below is an example for a partial match.

```javascript
var spamCheck = require('spam-check');
var options = {'string':'wordspoopwords','type':'part'};
spamCheck(options, function(err, results) {
  console.log("err:",err);
  console.log("results:",results);
});
```

## Results

Check the return for a `err` flag. If err is set to true, then the input was invalid. Otherwise it will be set to false. The above example will return something like...

```javascript
{ spam: true }
```

## Tests

You have to have mocha running. To install it run...

```bash
npm install mocha -g
```

Then you can run the tests by turning on the server and run...

```bash
mocha tests/
```

## TODO

-Add other Validation rules
