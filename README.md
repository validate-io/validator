Validator
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Utility for validating input arguments.



## Installation

``` bash
$ npm install input-validation
```

## Usage

To create a validator,

``` javascript
var validate = require( 'input-validation' );
```

The following validation methods are available...


#### validate.




## Examples

``` javascript

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/input-validation.svg
[npm-url]: https://npmjs.org/package/input-validation

[travis-image]: http://img.shields.io/travis/figure-io/validator/master.svg
[travis-url]: https://travis-ci.org/figure-io/validator

[coveralls-image]: https://img.shields.io/coveralls/figure-io/validator/master.svg
[coveralls-url]: https://coveralls.io/r/figure-io/validator?branch=master

[dependencies-image]: http://img.shields.io/david/figure-io/validator.svg
[dependencies-url]: https://david-dm.org/figure-io/validator

[dev-dependencies-image]: http://img.shields.io/david/dev/figure-io/validator.svg
[dev-dependencies-url]: https://david-dm.org/dev/figure-io/validator

[github-issues-image]: http://img.shields.io/github/issues/figure-io/validator.svg
[github-issues-url]: https://github.com/figure-io/validator/issues