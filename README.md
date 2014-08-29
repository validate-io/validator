Validator
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Utility for validating input arguments.



## Installation

``` bash
$ npm install input-validation
```

## Usage

To use the module,

``` javascript
var validate = require( 'input-validation' );
```

### validate( rules, value )

Validates that a `value` abides by a set of defined `rules`.

Input validation works by specifying rules as a serialized string, where each rule is delimited by pipes `|`. For example,

``` javascript
var rules = 'object|has_properties[beep,boop]';
```

In the example, `object` and `has_properties` are the rules. Some rules require additional parameters. These parameters are specified as a comma-delimited string within brackets. Hence, `[beep,boop]` specifies required properties.

The following validation rules are supported...


#### object

Validates if a `value` is a plain `object`; e.g., `{}`.

``` javascript
validate( 'object', {} );
// Returns true

validate( 'object', [] );
// Returns false

validate( 'object', null );
// Returns false
```

#### array

Validates if a `value` is an `array`.

``` javascript
validate( 'array', [] );
// Returns true

validate( 'array', {} );
// Returns false
```

#### function

Validates if a `value` is a `function`.

``` javascript
function foo(){
	console.log( 'boop' );
}

validate( 'function', foo );
// Returns true

validate( 'function', [].length );
// Returns false
```

#### string

Validates if a `value` is a `string`.

``` javascript
validate( 'string', 'beep' );
// Returns true

validate( 'string', 5 );
// Returns false
```

#### boolean

Validates if a `value` is a `boolean`.

``` javascript
validate( 'boolean', true );
// Returns true

validate( 'boolean', 1 );
// Returns false
```

#### undefined

Validates if a `value` is `undefined`.

``` javascript
validate( 'undefined', undefined );
// Returns true

validate( 'undefined', null );
// Returns false
```

#### null

Validates if a `value` is `null`.

``` javascript
validate( 'null', null );
// Returns true

validate( 'null', false );
// Returns false
```

#### number

Validates if a `value` is a `number`.

``` javascript
validate( 'number', 5.256 );
// Returns true

validate( 'number', NaN );
// Returns false
``` 

Note: `NaN` is __not__ validated as a `number`.


#### integer

Validates if a `value` is an `integer`.

``` javascript
validate( 'integer', 5 );
// Returns true

validate( 'integer', 5.256 );
// Returns false
```

#### empty

Validates if a `value` is `empty`. This method only applies to `string`, `array`, and `object` value types.

``` javascript
validate( 'empty', '' );
// Returns true

validate( 'empty', [] );
// Returns true

validate( 'empty', {} );
// Returns true

validate( 'empty', 'foo' );
// Returns false

validate( 'empty', [1] );
// Returns false

validate( 'empty', {'beep':'boop'} );
// Returns false
```

#### greater_than

Validates if a `value` is greater than a `comparator` value.

``` javascript
validate( 'greater_than[5]', 6 );
// Returns true

validate( 'greater_than[5]', 5 );
// Returns false
```

#### less_than

Validates if a `value` is less than a `comparator` value.

``` javascript
validate( 'less_than[5]', 4 );
// Returns true

validate( 'less_than[5]', 6 );
// Returns false
```

#### interval

Validates if a `value` is resides between a specified `interval` (inclusive).

``` javascript
validate( 'interval[5,7]', 6 );
// Returns true

validate( 'interval[5,7]', 4 );
// Returns false
```

#### interval

Validates if a `value` is resides between a specified `interval` (inclusive).

``` javascript
validate( 'interval[5,7]', 6 );
// Returns true

validate( 'interval[5,7]', 4 );
// Returns false
```

#### length

Validates if a `value` is either exactly a specified `length` or within an `interval`. This method applies only to `string` and `array` value types.

``` javascript
validate( 'length[2]', 'ok' );
// Returns true

validate( 'length[2]', [0,1] );
// Returns true

validate( 'length[1,3]', 'ok' );
// Returns true

validate( 'length[1,3]', [0,1] );
// Returns true

validate( 'length[2]', 'beep' );
// Returns false
```


#### has_properties

Validates if a `value` has a specified set of `properties`. This method applies only to `object` value types and does __not__ extend up the prototype chain.

``` javascript
validate( 'has_properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// Returns true

validate( 'has_properties[beep,boop,yo]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// Returns false
```

#### matches

Validates if a `value` matches a specified set of possible values. This method applies only to `string` value types.

``` javascript
validate( 'matches[beep,boop,bop]', 'beep' );
// Returns true

validate( 'matches[beep,boop,bop]', 'bap' );
// Returns false
```


## Examples

``` javascript

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

Inspired by [validate.js]( http://rickharrison.github.io/validate.js/ ).


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