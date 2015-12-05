'use strict';

// VALIDATE //

var validate = {};

validate.isArray = require( 'validate.io-array' );

validate.isPrimitiveArray = require( 'validate.io-primitive-array' );

validate.isBooleanArray = require( 'validate.io-boolean-array' );

validate.isBooleanPrimitiveArray = require( 'validate.io-boolean-primitive-array' );

validate.isStringArray = require( 'validate.io-string-array' );

validate.isStringPrimitiveArray = require( 'validate.io-string-primitive-array' );

validate.isAlphanumericArray = require( 'validate.io-alphanumeric-array' );

validate.isNumberArray = require( 'validate.io-number-array' );

validate.isNumberPrimitiveArray = require( 'validate.io-number-primitive-array' );

validate.isIntegerArray = require( 'validate.io-integer-array' );

validate.isSafeIntegerArray = require( 'validate.io-safe-integer-array' );

validate.isNonnegativeIntegerArray = require( 'validate.io-nonnegative-integer-array' );

validate.isPositiveIntegerArray = require( 'validate.io-positive-integer-array' );

validate.isNonpositiveIntegerArray = require( 'validate.io-nonpositive-integer-array' );

validate.isNegativeIntegerArray = require( 'validate.io-negative-integer-array' );

validate.isArrayArray = require( 'validate.io-array-array' );

validate.isObjectArray = require( 'validate.io-object-array' );

validate.isStrictDateArray = require( 'validate.io-strict-date-array' );

validate.isLogicalArray = require( 'validate.io-logical-array' );

validate.isFunctionArray = require( 'validate.io-function-array' );

validate.isTypedArray = require( 'validate.io-typed-array' );

validate.isInt8Array = require( 'validate.io-int8array' );

validate.isUint8Array = require( 'validate.io-uint8array' );

validate.isUint8ClampedArray = require( 'validate.io-uint8array-clamped' );

validate.isInt16Array = require( 'validate.io-int16array' );

validate.isUint16Array = require( 'validate.io-uint16array' );

validate.isInt32Array = require( 'validate.io-int32array' );

validate.isUint32Array = require( 'validate.io-uint32array' );

validate.isFloat32Array = require( 'validate.io-float32array' );

validate.isFloat64Array = require( 'validate.io-float64array' );

validate.isSquareMatrix = require( 'validate.io-square-matrix' );

validate.hasMin = require( 'validate.io-array-min' );

validate.hasMax = require( 'validate.io-array-max' );

validate.isUnique = require( 'validate.io-unique' );

validate.isPermutation = require( 'validate.io-permutation' );

validate.hasNumMin = require( 'validate.io-number-array-min' );

validate.hasNumMax = require( 'validate.io-number-array-max' );

validate.hasSize = require( 'validate.io-size' );

validate.contains = require( 'validate.io-contains' );

validate.arrayLike = require( 'validate.io-array-like' );

validate.typedArrayLike = require( 'validate.io-typed-array-like' );

validate.matrixLike = require( 'validate.io-matrix-like' );

validate.ndarrayLike = require( 'validate.io-ndarray-like' );

validate.isMatrix = require( 'validate.io-matrix' );


// EXPORTS //

module.exports = validate;
