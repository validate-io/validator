Validator
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Utility for validating input arguments.

The primary motivation for this module is to validate input arguments provided to publicly exposed methods. Other utilities exist but are either limited, more verbose (use method chaining), used as if asynchronous (callbacks), or part of some larger utility library (e.g., [underscore](http://lodash.com/)).  


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
1. 	[Rules](#rules)
	*	[object](#object)
	* 	[array](#array)
	* 	[function](#function)
	*	[string](#string)
	* 	[lowercase](#lowercase)
	* 	[uppercase](#uppercase)
	* 	[boolean](#boolean)
	*	[regexp](#regexp)
	* 	[strict_date](#strict_date)
	*	[undefined](#undefined)
	*	[null](#null)
	*	[number](#number)
	*	[integer](#integer)
	*	[float](#float)
	*	[nan](#nan)
	*	[empty](#empty)
	*	[equals](#equals)
	*	[greater_than](#greater_than)
	*	[less_than](#less_than)
	*	[interval](#interval)
	*	[length](#length)
	*	[properties](#properties)
	*	[strict_properties](#strict_properties)
	*	[matches](#matches)
1. 	[Examples](#examples)
1. 	[Notes](#notes)
1. 	[Tests](#tests)
	*	[Unit](#unit)
	*	[Coverage](#test-coverage)
1. 	[License](#license)



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
var rules = 'object|properties[beep,boop]';
```

In the example, `object` and `properties` are the rules. Some rules require additional parameters. These parameters are specified as a comma-delimited string within brackets. Hence, `[beep,boop]` specifies required properties.


### Rules 

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

#### lowercase

Validates if a `value` is a lowercase `string`.

``` javascript
validate( 'lowercase', 'beep' );
// Returns true

validate( 'lowercase', 'Beep' );
// Returns false
```

Note: validates that a `value` is a `string`.


#### uppercase

Validates if a `value` is an uppercase `string`.

``` javascript
validate( 'uppercase', 'BEEP' );
// Returns true

validate( 'uppercase', 'Beep' );
// Returns false
```

Note: validates that a `value` is a `string`. 


#### boolean

Validates if a `value` is a `boolean`.

``` javascript
validate( 'boolean', true );
// Returns true

validate( 'boolean', 1 );
// Returns false
```

#### regexp

Validates if a `value` is a regular expression.

``` javascript
validate( 'regexp', /.+/ );
// Returns true

validate( 'regexp', '/.+/' );
// Returns false
```

#### strict_date

Validates if a `value` is a `Date` object.

``` javascript
validate( 'strict_date', new Date() );
// Returns true

validate( 'strict_date', Date.now() );
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

Note: `NaN` is __not__ validated as a `number`. Both positive and negative `infinity` __are__ validated as `numbers`.


#### integer

Validates if a `value` is an `integer`.

``` javascript
validate( 'integer', 5 );
// Returns true

validate( 'integer', 5.256 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### float

Validates if a `value` is a `float`.

``` javascript
validate( 'float', 5.256 );
// Returns true

validate( 'float', 5 );
// Returns false
```

Note: validates that a `value` is a `number`.

Note: in JavaScript, every numeric value is stored as a `float`. Here, we make a distinction based on whether the value has digits located after a decimal point. Hence, the distinction is semantic and not indicative of the underlying representation. 

#### nan

Validates if a `value` is `NaN`.

``` javascript
validate( 'nan', NaN );
// Returns true

validate( 'nan', 5.256 );
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

#### equals

Validates if a `value` is equal to a `comparator` value.

``` javascript
validate( 'equals[5]', 5 );
// Returns true

validate( 'equals[5]', 5.256 );
// Returns false
```

Note: validates that a `value` is a `number`.

Note: the method's utility is questionable. If you require a specific value, probably better to just set the value and not a method using input validation.


#### greater_than

Validates if a `value` is greater than a `comparator` value.

``` javascript
validate( 'greater_than[5]', 6 );
// Returns true

validate( 'greater_than[5]', 5 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### less_than

Validates if a `value` is less than a `comparator` value.

``` javascript
validate( 'less_than[5]', 4 );
// Returns true

validate( 'less_than[5]', 6 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### interval

Validates if a `value` resides between a specified `interval` (inclusive).

``` javascript
validate( 'interval[5,7]', 6 );
// Returns true

validate( 'interval[5,7]', 4 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### length

Validates if a `value` is either exactly a specified `length` or within an `interval` (inclusive). This method applies only to `string` and `array` value types.

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


#### properties

Validates if a `value` has a specified set of `properties`. This method applies only to `object` value types and does __not__ extend up the prototype chain.

``` javascript
validate( 'properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// Returns true

validate( 'properties[beep,boop,yo]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// Returns false
```

Note: validates that a `value` is an `object`.


#### strict_properties

Validates if a `value` __only__ has a specified set of `properties`. This method applies only to `object` value types and does __not__ extend up the prototype chain.

``` javascript
validate( 'strict_properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar'
});
// Returns true

validate( 'stict_properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// Returns false
```

Note: validates that a `value` is an `object`.


#### matches

Validates if a `value` matches a specified set of possible values. This method applies only to `string` and `number` value types.

``` javascript
validate( 'matches[beep,boop,bop]', 'beep' );
// Returns true

validate( 'matches[1,3,5,7,9]', 5 );
// Returns true

validate( 'matches[beep,boop,bop]', 'bap' );
// Returns false
```


## Examples

An example class publicly exposing setters.

``` javascript
var validate = require( 'input-validation' );

function Beep() {
	this._boop = '';
	this._bap = 11;
	this._foo = 'beep';
	return this;
}

Beep.prototype.boop = function( value ) {
	var rules = 'string|length[0,12]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'boop()::invalid input argument. Must be a string less than 13 characters long.' );
	}
	this._boop = value;
	return this;
};

Beep.prototype.bap = function( value ) {
	var rules = 'integer|greater_than[10]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'bap()::invalid input argument. Must be an integer greater than 10.' );
	}
	this._bap = value;
	return this;
};

Beep.prototype.foo = function( value ) {
	var rules = 'matches[beep,boop,bap,foo,bar]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'foo()::invalid input argument. Must be one of the following: beep,boop,bap,foo,bar.' );
	}
	this._foo = value;
	return this;
};

Beep.prototype.toString = function() {
	var str = this._boop + ' ' + this._foo + ' ' + this._bap + '.';
	return str;
};


var beep = new Beep();

beep
	.boop( 'Hello' )
	.bap( 42 )
	.foo( 'bar' );

console.log( beep.toString() );

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

Inspired by [validate.js]( http://rickharrison.github.io/validate.js/ ) and [Chai](http://chaijs.com/api/assert/).


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