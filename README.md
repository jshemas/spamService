spamService
==============
[![Build Status](https://travis-ci.org/jshemas/spamService.png?branch=master)](https://travis-ci.org/jshemas/spamService)

A simple node module for checking for spam in user inputs. This module comes with a full list of spam words!

### Installation
```
npm install spam-check
```

### Usage
```
var spamCheck = require('spam-check');
var options = {'string':'poop'};
spamCheck(options, function(err, results) {
	console.log("err:",err);
	console.log("results:",results);
});
```
You can also set a type flag for either full matches or partial matches. Below is an example for a partial match.
```
var spamCheck = require('spam-check');
var options = {'string':'wordspoopwords','type':'part'};
spamCheck(options, function(err, results) {
	console.log("err:",err);
	console.log("results:",results);
});
```

### Resulte
Check the return for a ```err``` flag. If err is set to true, then the input was invalid. Otherwise it will be set to false. The above eample will return something like...
```
{ spam: true }
```

### Tests
You have to have mocha running. To install it run...
```
npm install mocha -g
```
Then you can run the tests by turning on the server and run...
```
mocha tests/
```

### Make
This will install the all of the dependencies, then run the tests
```
make test
```

### TODO
-Add other Validation rules

## License

(The MIT License)

Copyright (c) 2014 Josh Shemas

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
