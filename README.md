Validator
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validation utilities.

The primary [motivation](https://github.com/validate-io/overview) for this module is to validate input arguments provided to publicly exposed methods. Other utilities exist but are either limited, more verbose (use method chaining), used as if asynchronous (callbacks), or part of some larger utility library (e.g., [underscore](http://lodash.com/)).  


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
1. 	[Rules](#rules)
	*	[object](#object)
	*	[object_array](#object_array)
	*	[properties](#properties)
	*	[strict_properties](#strict_properties)
	* 	[array](#array)
	*	[array_array](#array_array)
	* 	[function](#function)
	*	[string](#string)
	*	[string_array](#string_array)
	* 	[lowercase](#lowercase)
	* 	[uppercase](#uppercase)
	* 	[boolean](#boolean)
	*	[boolean_array](#boolean_array)
	*	[regexp](#regexp)
	* 	[strict_date](#strict_date)
	* 	[timestamp](#timestamp)
	*	[relative_time](#relative_time)
	*	[absolute_time](#absolute_time)
	*	[undefined](#undefined)
	*	[null](#null)
	*	[number](#number)
	*	[number_array](#number_array)
	*	[integer](#integer)
	*	[integer_array](#integer_array)
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
// returns true
```

If a `value` violates a `rule`, then `validate()` immediately returns `false`.

``` javascript
rules = 'object|strict_properties[beep,baz]';

validate( rules, obj );
// returns false
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

Validates if a `value` is an `object`; e.g., `{}`.

``` javascript
validate( 'object', {} );
// returns true

validate( 'object', [] );
// returns false

validate( 'object', null );
// returns false
```


#### [object_array](https://github.com/validate-io/object-array)

Validates if a `value` is an `object array`.

``` javascript
validate( 'object_array', [{},{} );
// returns true

validate( 'object_array', [{},null] );
// returns false
```



#### [properties](https://github.com/validate-io/properties)

Validates if a `value` has a specified set of `properties`. This method applies only to `object` value types and does __not__ extend up the prototype chain.

``` javascript
validate( 'properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// returns true

validate( 'properties[beep,boop,yo]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// returns false
```

__Note__: validates that a `value` is an `object`.


#### [strict_properties](https://github.com/validate-io/strict-properties)

Validates if a `value` __only__ has a specified set of `properties`. This method applies only to `object` value types and does __not__ extend up the prototype chain.

``` javascript
validate( 'strict_properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar'
});
// returns true

validate( 'stict_properties[beep,boop]', {
	'beep': 'foo',
	'boop': 'bar',
	'baz': 'bop'
});
// returns false
```

__Note__: validates that a `value` is an `object`.


#### [array](https://github.com/validate-io/array)

Validates if a `value` is an `array`.

``` javascript
validate( 'array', [] );
// returns true

validate( 'array', {} );
// returns false
```



#### [array_array](https://github.com/validate-io/array-array)

Validates if a `value` is an `array` of `arrays`.

``` javascript
validate( 'array_array', [[],[]] );
// returns true

validate( 'array_array', [[],{}] );
// returns false
```



#### [function](https://github.com/validate-io/function)

Validates if a `value` is a `function`.

``` javascript
function foo(){
	console.log( 'boop' );
}

validate( 'function', foo );
// returns true

validate( 'function', [].length );
// returns false
```

#### [string](https://github.com/validate-io/string)

Validates if a `value` is a `string`.

``` javascript
validate( 'string', 'beep' );
// returns true

validate( 'string', 5 );
// returns false
```

#### [string_array](https://github.com/validate-io/string-array)

Validates if a `value` is a `string array`.

``` javascript
validate( 'string_array', ['a','b'] );
// returns true

validate( 'string_array', [1,2] );
// returns false
```


#### [lowercase](https://github.com/validate-io/lowercase)

Validates if a `value` is a lowercase `string`.

``` javascript
validate( 'lowercase', 'beep' );
// returns true

validate( 'lowercase', 'Beep' );
// returns false
```

__Note__: validates that a `value` is a `string`.


#### [uppercase](https://github.com/validate-io/uppercase)

Validates if a `value` is an uppercase `string`.

``` javascript
validate( 'uppercase', 'BEEP' );
// returns true

validate( 'uppercase', 'Beep' );
// returns false
```

__Note__: validates that a `value` is a `string`. 


#### [boolean](https://github.com/validate-io/boolean)

Validates if a `value` is a `boolean`.

``` javascript
validate( 'boolean', true );
// returns true

validate( 'boolean', 1 );
// returns false
```



#### [boolean_array](https://github.com/validate-io/boolean-array)

Validates if a `value` is a `boolean array`.

``` javascript
validate( 'boolean_array', [true,false] );
// returns true

validate( 'boolean_array', [true,1] );
// returns false
```



#### [regexp](https://github.com/validate-io/regexp)

Validates if a `value` is a regular expression.

``` javascript
validate( 'regexp', /.+/ );
// returns true

validate( 'regexp', '/.+/' );
// returns false
```

#### [strict_date](https://github.com/validate-io/strict-date)

Validates if a `value` is a `Date` object.

``` javascript
validate( 'strict_date', new Date() );
// returns true

validate( 'strict_date', Date.now() );
// returns false
```

#### [timestamp](https://github.com/validate-io/timestamp)

Validates if a `value` is a timestamp. A timestamp may be in either milliseconds (UNIX) or seconds.

``` javascript
var timestamp = Date.now();

validate( 'timestamp', timestamp );
// returns true

timestamp = Math.round( timestamp/1000 );
validate( 'timestamp', timestamp );
// returns true

validate( 'timestamp', new Date() );
// returns false
```

__Note__: validates that a `value` is a `number`.


#### [relative_time](https://github.com/validate-io/relative-time)

Validates if a `value` is formatted as relative time. Relative times have a time unit (`ms`, `s`, `m`, `h`, `d`, `w`, `n`, `y`) and the suffix `-ago`.

``` javascript
validate( 'relative_time', '72000ms-ago' );
// returns true

validate( 'relative_time', '72s ago' );
// returns false
```

Note: the unit for months is `n`.

__Note__: validates that a `value` is a `string`.


#### [absolute_time](https://github.com/validate-io/absolute-time)

Validates if a `value` is an absolute time (date); e.g., `2014/07/18-9:34:42`. An absolute date is formatted according to the following rules:

*	`year`, `month`, and `day` are separated by `/`: `year/month/day`
* 	calendar values are separated from temporal values by either a space or `-`: `year/month/day-00:00:00` or `year/month/day 00:00:00`
*	if specified, hour and minutes must be specified together: `00:00`
*	seconds are optional


``` javascript
validate( 'absolute_time', '2014/07/14' );
// returns true

validate( 'absolute_time', '2014/07/14 9:23' );
// returns true

validate( 'absolute_time', '2014/07/18-9:34:42' );
// returns true

validate( 'absolute_time', new Date().toString() );
// returns false
```

__Note__: validates that a `value` is a `string`.


#### [undefined](https://github.com/validate-io/undefined)

Validates if a `value` is `undefined`.

``` javascript
validate( 'undefined', undefined );
// returns true

validate( 'undefined', null );
// returns false
```

#### [null](https://github.com/validate-io/null)

Validates if a `value` is `null`.

``` javascript
validate( 'null', null );
// returns true

validate( 'null', false );
// returns false
```

#### [number](https://github.com/validate-io/number)

Validates if a `value` is a `number`.

``` javascript
validate( 'number', 5.256 );
// returns true

validate( 'number', NaN );
// returns false
``` 

__Note__: `NaN` is __not__ validated as a `number`. Both positive and negative `infinity` __are__ validated as `numbers`.



#### [number_array](https://github.com/validate-io/number-array)

Validates if a `value` is an `number array`.

``` javascript
validate( 'number_array', [3.14,2] );
// returns true

validate( 'number_array', [NaN,2] );
// returns false
```


#### [integer](https://github.com/validate-io/integer)

Validates if a `value` is an `integer`.

``` javascript
validate( 'integer', 5 );
// returns true

validate( 'integer', 5.256 );
// returns false
```

__Note__: validates that a `value` is a `number`.



#### [integer_array](https://github.com/validate-io/integer-array)

Validates if a `value` is an `integer array`.

``` javascript
validate( 'integer_array', [1,2] );
// returns true

validate( 'integer_array', ['1','2'] );
// returns false
```


#### [float](https://github.com/validate-io/float)

Validates if a `value` is a `float`.

``` javascript
validate( 'float', 5.256 );
// returns true

validate( 'float', 5 );
// returns false
```

__Note__: validates that a `value` is a `number`.

Note: in JavaScript, every numeric value is stored as a `float`. Here, we make a distinction based on whether the value has digits located after a decimal point. Hence, the distinction is semantic and not indicative of the underlying representation. 

#### [nan](https://github.com/validate-io/nan)

Validates if a `value` is `NaN`.

``` javascript
validate( 'nan', NaN );
// returns true

validate( 'nan', 5.256 );
// returns false
```


#### [greater_than](https://github.com/validate-io/greater-than)

Validates if a `value` is greater than a `comparator` value.

``` javascript
validate( 'greater_than[5]', 6 );
// returns true

validate( 'greater_than[5]', 5 );
// returns false
```

__Note__: validates that both input arguments are of type `number`.


#### [less_than](https://github.com/validate-io/less-than)

Validates if a `value` is less than a `comparator` value.

``` javascript
validate( 'less_than[5]', 4 );
// returns true

validate( 'less_than[5]', 6 );
// returns false
```

__Note__: validates that both input arguments are of type `number`.


#### [interval](https://github.com/validate-io/interval)

Validates if a `value` resides between a specified `interval` (inclusive).

``` javascript
validate( 'interval[5,7]', 6 );
// returns true

validate( 'interval[5,7]', 4 );
// returns false
```

__Note__: validates that all input arguments are of type `number`.


#### [empty](https://github.com/validate-io/empty)

Validates if a `value` is `empty`. This method only applies to `string`, `array`, and `object` value types.

``` javascript
validate( 'empty', '' );
// returns true

validate( 'empty', [] );
// returns true

validate( 'empty', {} );
// returns true

validate( 'empty', 'foo' );
// returns false

validate( 'empty', [1] );
// returns false

validate( 'empty', {'beep':'boop'} );
// returns false
```

#### [length](https://github.com/validate-io/length)

Validates if a `value` is either exactly a specified `length` or within an `interval` (inclusive). This method applies only to `string`, `function`, and `array` value types.

``` javascript
validate( 'length[2]', 'ok' );
// returns true

validate( 'length[2]', [0,1] );
// returns true

validate( 'length[2]', function(a,b){} );
// returns true

validate( 'length[1,3]', 'ok' );
// returns true

validate( 'length[1,3]', [0,1] );
// returns true

validate( 'length[2]', 'beep' );
// returns false
```


#### [matches](https://github.com/validate-io/matches)

Validates if a `value` matches a specified set of possible values. This method applies only to `string` and `number` value types.

``` javascript
validate( 'matches[beep,boop,bop]', 'beep' );
// returns true

validate( 'matches[1,3,5,7,9]', 5 );
// returns true

validate( 'matches[beep,boop,bop]', 'bap' );
// returns false
```


#### [ip_address](https://github.com/validate-io/ip-address)

Validates if a `value` is an IP address.

``` javascript
validate( 'ip_address', '192.168.17.142' );
// returns true

validate( 'ip_address', '256.248.10.46' );
// returns false
```

__Note__: validates that a `value` is a `string`.




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

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


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
