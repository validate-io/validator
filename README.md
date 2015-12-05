Validate
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validation utilities.

The primary [motivation][validate-io-overview] for this module is to validate input arguments provided to publicly exposed methods. Other utilities exist but are either limited, more verbose (use method chaining), used as if asynchronous (callbacks), or part of some larger utility library (e.g., [underscore][lodash].  


1. 	[Installation](#installation)
1. 	[Usage](#usage)
1. 	[Methods](#methods)
	-	Strings
		-	[isString()][validate-string]
		-	[isStringPrimitive()][validate-string-primitive]
		-	[isLowercase()][validate-lowercase]
		-	[isUppercase()][validate-uppercase]
		-	[isAlphanumeric()][validate-alphanumeric]
		-	[isJSON()][validate-json]
		-	[isAlphagram()][validate-alphagram]
		-	[isAnagram()][validate-anagram]
		-	[isBinaryString()][validate-bineary-string]
		-	[isIPAddress()][validate-ip-address]
		-	[isURI()][validate-uri]
		-	[isEmailAddress()][validate-email-address]
		-	[isHexColor()][validate-color-hexadecimal]
	-	Booleans
		- 	[isBoolean()][validate-boolean]
		-	[isBooleanPrimitive()][validate-boolean-primitive]
	-	Numbers
		-	[isNumber()][validate-number]
		-	[isNumberPrimitive()][validate-number-primitive]
		-	[isNaN()][validate-nan]
		-	[isNaNPrimitive()][validate-nan-primitive]
		-	[isFloat()][validate-float]
		-	[isPositive()][validate-positive]
		-	[isPositivePrimitive()][validate-positive-primitive]
		-	[isPositiveZero()][validate-positive-zero]
		-	[isNegative()][validate-negative]
		-	[isNegativeZero()][validate-negative-zero]
		-	[isNonnegative()][validate-nonnegative]
		-	[isNonpositive()][validate-nonpositive]
		-	[isInteger()][validate-integer]
		-	[isIntegerPrimitive()][validate-integer-primitive]
		-	[isSafeInteger()][validate-safe-integer]
		-	[isNonnegativeInteger()][validate-nonnegative-integer]
		-	[isNonpositiveInteger()][validate-nonpositive-integer]
		-	[isNegativeInteger()][validate-negative-integer]
		-	[isPositiveInteger()][validate-positive-integer]
		-	[isFinite()][validate-finite]
		-	[isLessThan()][validate-less-than]
		-	[isGreaterThan()][validate-greater-than]
		-	[onInterval()][validate-interval]
	-	Null
		-	[isNull()][validate-null]
	-	Undefined
		-	[isUndefined()][validate-undefined]
		-	[isUndefinedOrNull()][validate-undefined-or-null]
	-	Objects
		-	[isObject()][validate-object]
		-	[hasProperties()][validate-properties]
		-	[hasStrictProperties()][validate-strict-properties]
	-	Arrays
		-	[isArray()][validate-array]
		-	[isStringArray()][validate-string-array]
		-	[isStringPrimitiveArray()][validate-string-primitive-array]
		-	[isAlphanumericArray()][validate-alphanumeric-array]
		-	[isBooleanArray()][validate-boolean-array]
		-	[isBooleanPrimitiveArray()][validate-boolean-primitive-array]
		-	[isNumberArray()][validate-number-array]
		-	[isNumberPrimitiveArray()][validate-number-primitive-array]
		-	[isIntegerArray()][validate-integer-array]
		-	[isSafeIntegerArray()][validate-safe-integer-array]
		-	[isNonnegativeIntegerArray()][validate-nonnegative-integer-array]
		-	[isPositiveIntegerArray()][validate-positive-integer-array]
		-	[isNegativeIntegerArray()][validate-negative-integer-array]
		-	[isNonpositiveIntegerArray()][validate-nonpositive-integer-array]
		-	[isArrayArray()][validate-array-array]
		-	[isObjectArray()][validate-object-array]
		-	[isPrimitiveArray()][validate-primitive]
		-	[isLogicalArray()][validate-logical-array]
		-	[isFunctionArray()][validate-function-array]
		-	[isTypedArray()][validate-typed-array]
		-	[isInt8Array()][validate-int8array]
		-	[isUint8Array()][validate-uint8array]
		-	[isUint8ClampedArray()][validate-uint8array-clamped]
		-	[isInt16Array()][validate-int16array]
		-	[isUint16Array()][validate-uint16array]
		-	[isInt32Array()][validate-int32array]
		-	[isUint32Array()][validate-uint32array]
		-	[isFloat32Array()][validate-float32array]
		-	[isFloat64Array()][validate-float64array]
		-	[isUnique()][validate-unique]
		-	[isPermutation()][validate-permutation]
		-	[isSquareMatrix()][validate-square-matrix]
		-	[isStrictDateArray()][validate-strict-date-array]
		-	[hasMax()][validate-array-max]
		-	[hasMin()][validate-array-min]
		-	[hasNumMax()][validate-number-array-max]
		-	[hasNumMin()][validate-number-array-min]
		-	[hasSize()][validate-size]
		-	[contains()][contains]
		-	[arrayLike()][validate-array-like]
		-	[typedArrayLike()][validate-typed-array-like]
		-	[matrixLike()][validate-matrix-like]
		-	[ndarrayLike()][validate-ndarray-like]
		-	[isMatrix()][validate-matrix]
	-	Functions
		-	[isFunction()][validate-function]
		-	[isNativeFunction()][validate-native-function]
	-	Regular Expressions
		-	[isRegexp()][validate-regexp]
	- 	Time
		-	[isStrictDate()][validate-strict-date]
		-	[isTimestamp()][validate-timestamp]
		-	[isRelativeTime()][validate-relative-time]
		-	[isAbsoluteTime()][validate-absolute-time]
	- 	Other
		-	[isPrimitive()][validate-primitive]
		-	[isBuffer()][validate-buffer]
		-	[isArguments()][validate-arguments]
		-	[isEmpty()][validate-empty]
		-	[hasLength()][validate-length]
		-	[matches()][validate-matches]
1. 	[Examples](#examples)
1. 	[Tests](#tests)
	*	[Unit](#unit)
	*	[Coverage](#test-coverage)
1. 	[License](#license)


---
## Installation

``` bash
$ npm install validate.io
```

## Usage

``` javascript
var validate = require( 'validate.io' );
```

## Methods

The `validate` module is comprised of several smaller modules. If you want to roll your own `validate`, follow the links and import the individual modules. For method documentation, see each respective module.


---
## Examples

``` javascript
var validate = require( 'validate.io' );

function is( bool, value, msg ) {
	if ( validate.isRegexp( value ) ) {
		value = value.toString();
	}
	else if ( validate.isFunction( value ) ) {
		value = value.constructor.name;
	}
	else {
		value = JSON.stringify( value );
	}
	console.log( '%s is %s%s', value, ( bool ) ? '' : 'not ', msg );
}

var methods,
	bool,
	vals,
	fcn,
	msg,
	v,
	N, M,
	i, j;

vals = [
	'beep',
	5,
	Math.PI,
	-0,
	true,
	null,
	undefined,
	[],
	{},
	function foo(){},
	/.*/,
	new Date(),
	-1,
	JSON.parse
];

methods = [
	[ validate.isStringPrimitive, 'a string' ],
	[ validate.isNegativeZero, 'negative zero' ],
	[ validate.isPositiveInteger, 'a positive integer' ],
	[ validate.isPositive, 'a positive number' ],
	[ validate.isNegativeInteger, 'a negative integer' ],
	[ validate.isNull, 'null' ],
	[ validate.isUndefined, 'undefined' ],
	[ validate.isBoolean, 'a boolean' ],
	[ validate.isNativeFunction, 'a native function' ],
	[ validate.isFunction, 'a function' ],
	[ validate.isArray, 'an array' ],
	[ validate.isStrictDate, 'a date object' ],
	[ validate.isRegexp, 'a regular expression' ],
	[ validate.isObject, 'an object' ]
];

N = vals.length;
M = methods.length;
for ( i = 0; i < N; i++ ) {
	v = vals[ i ];
	for ( j = 0; j < M; j++ ) {
		fcn = methods[ j ][ 0 ];
		msg = methods[ j ][ 1 ];
		bool = fcn( v );
		if ( bool ) {
			is( bool, v, msg );
			break;
		} else {
			is( bool, v, msg );
		}
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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

Copyright &copy; 2014-2015. The Validate.io Authors.



[npm-image]: http://img.shields.io/npm/v/validate.io.svg
[npm-url]: https://npmjs.org/package/validate.io

[travis-image]: http://img.shields.io/travis/validate-io/validator/master.svg
[travis-url]: https://travis-ci.org/validate-io/validator

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/validator/master.svg
[codecov-url]: https://codecov.io/github/validate-io/validator?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/validator.svg
[dependencies-url]: https://david-dm.org/validate-io/validator

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/validator.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/validator

[github-issues-image]: http://img.shields.io/github/issues/validate-io/validator.svg
[github-issues-url]: https://github.com/validate-io/validator/issues

[mocha]: http://mochajs.org
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[lodash]: http://lodash.com/

[overview]: https://github.com/validate-io/overview

[validate-ip-address]: https://github.com/validate-io/ip-address
[validate-absolute-time]: https://github.com/validate-io/absolute-time
[validate-empty]: https://github.com/validate-io/empty
[validate-function]: https://github.com/validate-io/function
[validate-greater-than]: https://github.com/validate-io/greater-than
[validate-boolean]: https://github.com/validate-io/boolean
[validate-float]: https://github.com/validate-io/float
[validate-interval]: https://github.com/validate-io/interval
[validate-length]: https://github.com/validate-io/length
[validate-less-than]: https://github.com/validate-io/less-than
[validate-lowercase]: https://github.com/validate-io/lowercase
[validate-matches]: https://github.com/validate-io/matches
[validate-nan]: https://github.com/validate-io/nan
[validate-null]: https://github.com/validate-io/null
[validate-number]: https://github.com/validate-io/number
[validate-properties]: https://github.com/validate-io/properties
[validate-relative-time]: https://github.com/validate-io/relative-time
[validate-strict-properties]: https://github.com/validate-io/strict-properties
[validate-string]: https://github.com/validate-io/string
[validate-timestamp]: https://github.com/validate-io/timestamp
[validate-uppercase]: https://github.com/validate-io/uppercase
[validate-string-array]: https://github.com/validate-io/string-array
[validate-integer-array]: https://github.com/validate-io/integer-array
[validate-number-array]: https://github.com/validate-io/number-array
[validate-boolean-array]: https://github.com/validate-io/boolean-array
[validate-array-array]: https://github.com/validate-io/array-array
[validate-object-array]: https://github.com/validate-io/object-array
[validate-alphanumeric]: https://github.com/validate-io/alphanumeric
[validate-alphanumeric-array]: https://github.com/validate-io/alphanumeric-array
[validate-unique]: https://github.com/validate-io/unique
[validate-permutation]: https://github.com/validate-io/permutation
[validate-primitive]: https://github.com/validate-io/primitive
[validate-primitive-array]: https://github.com/validate-io/primitive-array
[validate-json]: https://github.com/validate-io/json
[validate-square-matrix]: https://github.com/validate-io/square-matrix
[validate-finite]: https://github.com/validate-io/finite
[validate-integer]: https://github.com/validate-io/integer
[validate-nonnegative-integer]: https://github.com/validate-io/nonnegative-integer
[validate-nonpositive-integer]: https://github.com/validate-io/nonpositive-integer
[validate-negative-integer]: https://github.com/validate-io/negative-integer
[validate-positive-integer]: https://github.com/validate-io/positive-integer
[validate-strict-date-array]: https://github.com/validate-io/strict-date-array
[validate-positive]: https://github.com/validate-io/positive
[validate-nonnegative]: https://github.com/validate-io/nonnegative
[validate-nonnegative-integer-array]: https://github.com/validate-io/nonnegative-integer-array
[validate-number-array-max]: https://github.com/validate-io/number-array-max
[validate-number-array-min]: https://github.com/validate-io/number-array-min
[validate-array-max]: https://github.com/validate-io/array-max
[validate-array-min]: https://github.com/validate-io/array-min
[validate-negative]: https://github.com/validate-io/negative
[validate-nonpositive]: https://github.com/validate-io/nonpositive
[validate-size]: https://github.com/validate-io/size
[validate-logical-array]: https://github.com/validate-io/logical-array
[validate-buffer]: https://github.com/validate-io/buffer
[validate-number-primitive]: https://github.com/validate-io/number-primitive
[validate-boolean-primitive]: https://github.com/validate-io/boolean-primitive
[validate-string-primitive]: https://github.com/validate-io/string-primitive
[validate-boolean-primitive-array]: https://github.com/validate-io/boolean-primitive-array
[validate-string-primitive-array]: https://github.com/validate-io/string-primitive-array
[validate-number-primitive-array]: https://github.com/validate-io/number-primitive-array
[validate-regexp]: https://github.com/validate-io/regexp
[validate-strict-date]: https://github.com/validate-io/strict-date
[validate-undefined]: https://github.com/validate-io/undefined
[validate-nan-primitive]: https://github.com/validate-io/nan-primitive
[validate-contains]: https://github.com/validate-io/contains
[validate-alphagram]: https://github.com/validate-io/alphagram
[validate-anagram]: https://github.com/validate-io/anagram
[validate-uri]: https://github.com/validate-io/uri
[validate-positive-integer-array]: https://github.com/validate-io/positive-integer-array
[validate-negative-integer-array]: https://github.com/validate-io/negative-integer-array
[validate-nonpositive-integer-array]: https://github.com/validate-io/nonpositive-integer-array
[validate-binary-string]: https://github.com/validate-io/binary-string
[validate-integer-primitive]: https://github.com/validate-io/integer-primitive
[validate-safe-integer]: https://github.com/validate-io/safe-integer
[validate-safe-integer-array]: https://github.com/validate-io/safe-integer-array
[validate-function-array]: https://github.com/validate-io/function-array
[validate-object]: https://github.com/validate-io/object
[validate-typed-array]: https://github.com/validate-io/typed-array
[validate-int8array]: https://github.com/validate-io/int8array
[validate-uint8array]: https://github.com/validate-io/uint8array
[validate-uint8array-clamped]: https://github.com/validate-io/uint8array-clamped
[validate-int16array]: https://github.com/validate-io/int16array
[validate-uint16array]: https://github.com/validate-io/uint16array
[validate-int32array]: https://github.com/validate-io/int32array
[validate-uint32array]: https://github.com/validate-io/uint32array
[validate-float32array]: https://github.com/validate-io/float32array
[validate-float64array]: https://github.com/validate-io/float64array
[validate-array]: https://github.com/validate-io/array
[validate-ndarray-like]: https://github.com/validate-io/ndarray-like
[validate-array-like]: https://github.com/validate-io/array-like
[validate-matrix]: https://github.com/validate-io/matrix
[validate-matrix-like]: https://github.com/validate-io/matrix-like
[validate-typed-array-like]: https://github.com/validate-io/typed-array-like
[validate-positive-primitive]: https://github.com/validate-io/positive-primitive
[validate-undefined-or-null]: https://github.com/validate-io/undefined-or-null
[validate-positive-zero]: https://github.com/validate-io/positive-zero
[validate-negative-zero]: https://github.com/validate-io/negative-zero
[validate-arguments]: https://github.com/validate-io/arguments
[validate-email-address]: https://github.com/validate-io/email-address
[validate-native-function]: https://github.com/validate-io/native-function
[validate-color-hexadecimal]: https://github.com/validate-io/color-hexadecimal
