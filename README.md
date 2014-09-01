Validator
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validation utilities.

The primary motivation for this module is to validate input arguments provided to publicly exposed methods. Other utilities exist but are either limited, more verbose (use method chaining), used as if asynchronous (callbacks), or part of some larger utility library (e.g., [underscore](http://lodash.com/)).  


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
1. 	[Rules](#rules)
	*	[object](#object)
	*	[properties](#properties)
	*	[strict_properties](#strict_properties)
	* 	[array](#array)
	* 	[function](#function)
	*	[string](#string)
	* 	[lowercase](#lowercase)
	* 	[uppercase](#uppercase)
	* 	[boolean](#boolean)
	*	[regexp](#regexp)
	* 	[strict_date](#strict_date)
	* 	[timestamp](#timestamp)
	*	[relative_time](#relative_time)
	*	[absolute_time](#absolute_time)
	*	[undefined](#undefined)
	*	[null](#null)
	*	[number](#number)
	*	[integer](#integer)
	*	[float](#float)
	*	[nan](#nan)
	*	[greater_than](#greater_than)
	*	[less_than](#less_than)
	*	[interval](#interval)
	*	[empty](#empty)
	*	[length](#length)
	*	[matches](#matches)
	* 	[ip_address](#ip_address)
1. 	[Examples](#examples)
1. 	[Notes](#notes)
1. 	[Tests](#tests)
	*	[Unit](#unit)
	*	[Coverage](#test-coverage)
1. 	[License](#license)



## Installation

``` bash
$ npm install validate.io
```

## Usage

To use the module,

``` javascript
var validate = require( 'validate.io' );
```

### validate( rules, value )

Validates that a `value` abides by a set of defined `rules`.

Input validation works by specifying rules as a serialized string, where each rule is delimited by pipes `|`. For example,

``` javascript
var rules = 'object|properties[beep,boop]';
```

In the example, `object` and `properties` are the rules. Some rules require additional parameters. These parameters are specified as a comma-delimited string within brackets. Hence, `[beep,boop]` specifies required properties.

If a `value` abides by all `rules`, then `validate()` returns `true`.

``` javascript
var obj = {
	'beep': true,
	'boop': false
};

validate( rules, obj );
// Returns true
```

If a `value` violates a `rule`, then `validate()` immediately returns `false`.

``` javascript
rules = 'object|strict_properties[beep,baz]';

validate( rules, obj );
// Returns false
```

Hence, when type checking, test for falsey output to trigger an `error`.

``` javascript
if ( !validate( rules, obj ) ) {
	throw new TypeError( 'Invalid input argument. Options must be an object and have only the following properties: [ beep, baz ].' );
}
```


### Rules 

The following validation rules are supported...


#### [object](https://github.com/validate-io/object)

Validates if a `value` is a plain `object`; e.g., `{}`.

``` javascript
validate( 'object', {} );
// Returns true

validate( 'object', [] );
// Returns false

validate( 'object', null );
// Returns false
```


#### [properties](https://github.com/validate-io/properties)

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


#### [strict_properties](https://github.com/validate-io/strict-properties)

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


#### [array](https://github.com/validate-io/array)

Validates if a `value` is an `array`.

``` javascript
validate( 'array', [] );
// Returns true

validate( 'array', {} );
// Returns false
```

#### [function](https://github.com/validate-io/function)

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

#### [string](https://github.com/validate-io/string)

Validates if a `value` is a `string`.

``` javascript
validate( 'string', 'beep' );
// Returns true

validate( 'string', 5 );
// Returns false
```

#### [lowercase](https://github.com/validate-io/lowercase)

Validates if a `value` is a lowercase `string`.

``` javascript
validate( 'lowercase', 'beep' );
// Returns true

validate( 'lowercase', 'Beep' );
// Returns false
```

Note: validates that a `value` is a `string`.


#### [uppercase](https://github.com/validate-io/uppercase)

Validates if a `value` is an uppercase `string`.

``` javascript
validate( 'uppercase', 'BEEP' );
// Returns true

validate( 'uppercase', 'Beep' );
// Returns false
```

Note: validates that a `value` is a `string`. 


#### [boolean](https://github.com/validate-io/boolean)

Validates if a `value` is a `boolean`.

``` javascript
validate( 'boolean', true );
// Returns true

validate( 'boolean', 1 );
// Returns false
```

#### [regexp](https://github.com/validate-io/regexp)

Validates if a `value` is a regular expression.

``` javascript
validate( 'regexp', /.+/ );
// Returns true

validate( 'regexp', '/.+/' );
// Returns false
```

#### [strict_date](https://github.com/validate-io/strict-date)

Validates if a `value` is a `Date` object.

``` javascript
validate( 'strict_date', new Date() );
// Returns true

validate( 'strict_date', Date.now() );
// Returns false
```

#### [timestamp](https://github.com/validate-io/timestamp)

Validates if a `value` is a timestamp. A timestamp may be in either milliseconds (UNIX) or seconds.

``` javascript
var timestamp = Date.now();

validate( 'timestamp', timestamp );
// Returns true

timestamp = Math.round( timestamp/1000 );
validate( 'timestamp', timestamp );
// Returns true

validate( 'timestamp', new Date() );
// Returns false
```

Note: validates that a `value` is a `number`.


#### [relative_time](https://github.com/validate-io/relative-time)

Validates if a `value` is formatted as relative time. Relative times have a time unit (`ms`, `s`, `m`, `h`, `d`, `w`, `n`, `y`) and the suffix `-ago`.

``` javascript
validate( 'relative_time', '72000ms-ago' );
// Returns true

validate( 'relative_time', '72s ago' );
// Returns false
```

Note: the unit for months is `n`.

Note: validates that a `value` is a `string`.


#### [absolute_time](https://github.com/validate-io/absolute-time)

Validates if a `value` is an absolute time (date); e.g., `2014/07/18-9:34:42`. An absolute date is formatted according to the following rules:

*	`year`, `month`, and `day` are separated by `/`: `year/month/day`
* 	calendar values are separated from temporal values by either a space or `-`: `year/month/day-00:00:00` or `year/month/day 00:00:00`
*	if specified, hour and minutes must be specified together: `00:00`
*	seconds are optional


``` javascript
validate( 'absolute_time', '2014/07/14' );
// Returns true

validate( 'absolute_time', '2014/07/14 9:23' );
// Returns true

validate( 'absolute_time', '2014/07/18-9:34:42' );
// Returns true

validate( 'absolute_time', new Date().toString() );
// Returns false
```

Note: validates that a `value` is a `string`.


#### [undefined](https://github.com/validate-io/undefined)

Validates if a `value` is `undefined`.

``` javascript
validate( 'undefined', undefined );
// Returns true

validate( 'undefined', null );
// Returns false
```

#### [null](https://github.com/validate-io/null)

Validates if a `value` is `null`.

``` javascript
validate( 'null', null );
// Returns true

validate( 'null', false );
// Returns false
```

#### [number](https://github.com/validate-io/number)

Validates if a `value` is a `number`.

``` javascript
validate( 'number', 5.256 );
// Returns true

validate( 'number', NaN );
// Returns false
``` 

Note: `NaN` is __not__ validated as a `number`. Both positive and negative `infinity` __are__ validated as `numbers`.


#### [integer](https://github.com/validate-io/integer)

Validates if a `value` is an `integer`.

``` javascript
validate( 'integer', 5 );
// Returns true

validate( 'integer', 5.256 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### [float](https://github.com/validate-io/float)

Validates if a `value` is a `float`.

``` javascript
validate( 'float', 5.256 );
// Returns true

validate( 'float', 5 );
// Returns false
```

Note: validates that a `value` is a `number`.

Note: in JavaScript, every numeric value is stored as a `float`. Here, we make a distinction based on whether the value has digits located after a decimal point. Hence, the distinction is semantic and not indicative of the underlying representation. 

#### [nan](https://github.com/validate-io/nan)

Validates if a `value` is `NaN`.

``` javascript
validate( 'nan', NaN );
// Returns true

validate( 'nan', 5.256 );
// Returns false
```


#### [greater_than](https://github.com/validate-io/greater-than)

Validates if a `value` is greater than a `comparator` value.

``` javascript
validate( 'greater_than[5]', 6 );
// Returns true

validate( 'greater_than[5]', 5 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### [less_than](https://github.com/validate-io/less-than)

Validates if a `value` is less than a `comparator` value.

``` javascript
validate( 'less_than[5]', 4 );
// Returns true

validate( 'less_than[5]', 6 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### [interval](https://github.com/validate-io/interval)

Validates if a `value` resides between a specified `interval` (inclusive).

``` javascript
validate( 'interval[5,7]', 6 );
// Returns true

validate( 'interval[5,7]', 4 );
// Returns false
```

Note: validates that a `value` is a `number`.


#### [empty](https://github.com/validate-io/empty)

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

#### [length](https://github.com/validate-io/length)

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


#### [matches](https://github.com/validate-io/matches)

Validates if a `value` matches a specified set of possible values. This method applies only to `string` and `number` value types.

``` javascript
validate( 'matches[beep,boop,bop]', 'beep' );
// Returns true

validate( 'matches[1,3,5,7,9]', 5 );
// Returns true

validate( 'matches[beep,boop,bop]', 'bap' );
// Returns false
```


#### [ip_address](https://github.com/validate-io/ip-address)

Validates if a `value` is an IP address.

``` javascript
validate( 'ip_address', '192.168.17.142' );
// Returns true

validate( 'ip_address', '256.248.10.46' );
// Returns false
```

Note: validates that a `value` is a `string`.




## Examples

An example class publicly exposing setters.

``` javascript
var validate = require( 'validate.io' );

function Beep() {
	this._boop = '';
	this._bap = 11;
	this._foo = 'beep';
	return this;
}

Beep.prototype.boop = function( value ) {
	var rules = 'string|length[0,12]';
	if ( !validate( rules, value ) ) {
		throw new TypeError( 'boop()::invalid input argument. Must be a string less than 13 characters long.' );
	}
	this._boop = value;
	return this;
};

Beep.prototype.bap = function( value ) {
	var rules = 'integer|greater_than[10]';
	if ( !validate( rules, value ) ) {
		throw new TypeError( 'bap()::invalid input argument. Must be an integer greater than 10.' );
	}
	this._bap = value;
	return this;
};

Beep.prototype.foo = function( value ) {
	var rules = 'matches[beep,boop,bap,foo,bar]';
	if ( !validate( rules, value ) ) {
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



[npm-image]: http://img.shields.io/npm/v/validate.io.svg
[npm-url]: https://npmjs.org/package/validate.io

[travis-image]: http://img.shields.io/travis/validate-io/validator/master.svg
[travis-url]: https://travis-ci.org/validate-io/validator

[coveralls-image]: https://img.shields.io/coveralls/validate-io/validator/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/validator?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/validator.svg
[dependencies-url]: https://david-dm.org/validate-io/validator

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/validator.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/validator

[github-issues-image]: http://img.shields.io/github/issues/validate-io/validator.svg
[github-issues-url]: https://github.com/validate-io/validator/issues