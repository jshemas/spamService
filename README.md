spamService
===========

A simple web service for checking for spam in user inputs.

### Installation
You need to have Node.js(v0.10.10) running.

```
npm install
node app
```

### Return JSON
The return JSON should always have a status code of 200. Check the return for a ```success``` flag. 
If success is set to true, then the user's input was valid. Otherwise it will be set to false.

Valid GET call
```
http://localhost:8080/validate/var?string='pizza'&type='part'
```

### Tests
You have to have jasmine-node running. To install it run...
```
npm install jasmine-node -g
```
Then you can run the tests by turning on the server and run...
```
jasmine-node spec/
```

### TODO
-Add array of more spam words

-Add other Validation rules


## License

(The MIT License)

Copyright (c) 2013 Josh Shemas

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
