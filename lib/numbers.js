'use strict';

// VALIDATE //

var validate = {};

validate.isNumber = require( 'validate.io-number' );

validate.isNumberPrimitive = require( 'validate.io-number-primitive' );

validate.isNonnegative = require( 'validate.io-nonnegative' );

validate.isNonpositive = require( 'validate.io-nonpositive' );

validate.isPositive = require( 'validate.io-positive' );

validate.isPositivePrimitive = require( 'validate.io-positive-primitive' );

validate.isPositiveZero = require( 'validate.io-positive-zero' );

validate.isNegative = require( 'validate.io-negative' );

validate.isNegativeZero = require( 'validate.io-negative-zero' );

validate.isInteger = require( 'validate.io-integer' );

validate.isIntegerPrimitive = require( 'validate.io-integer-primitive' );

validate.isSafeInteger = require( 'validate.io-safe-integer' );

validate.isNonnegativeInteger = require( 'validate.io-nonnegative-integer' );

validate.isPositiveInteger = require( 'validate.io-positive-integer' );

validate.isNonpositiveInteger = require( 'validate.io-nonpositive-integer' );

validate.isNegativeInteger = require( 'validate.io-negative-integer' );

validate.isFloat = require( 'validate.io-float' );

validate.isNaN = require( 'validate.io-nan' );

validate.isNaNPrimitive = require( 'validate.io-nan-primitive' );

validate.isFinite = require( 'validate.io-finite' );

validate.isGreaterThan = require( 'validate.io-greater-than' );

validate.isLessThan = require( 'validate.io-less-than' );

validate.onInterval = require( 'validate.io-interval' );


// EXPORTS //

module.exports = validate;
