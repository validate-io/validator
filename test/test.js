/* globals describe, it, require */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTIONS //

/**
* FUNCTION: testProperty( name )
*	Tests that an object has a property and that the property value is a function.
*
* @param {string} name - property name
*/
function testProperty( name ) {
	it( 'should have a `'+ name + '` property that is a function', function test() {
		expect( validate ).to.have.property( name ).that.is.a( 'function' );
	});
} // end FUNCTION testProperty()


// TESTS //

describe( 'validate.io', function tests() {

	var properties = [

		// Strings:
		'isString',
		'isStringPrimitive',
		'isLowercase',
		'isUppercase',
		'isAlphanumeric',
		'isJSON',
		'isAlphagram',
		'isAnagram',
		'isBinaryString',
		'isIPAddress',
		'isURI',
		'isEmailAddress',
		'isHexColor',

		// Booleans:
		'isBoolean',
		'isBooleanPrimitive',

		// Numbers:
		'isNumber',
		'isNumberPrimitive',
		'isNaN',
		'isNaNPrimitive',
		'isFloat',
		'isPositive',
		'isPositivePrimitive',
		'isPositiveZero',
		'isNegative',
		'isNegativeZero',
		'isNonnegative',
		'isNonpositive',
		'isInteger',
		'isIntegerPrimitive',
		'isSafeInteger',
		'isNonnegativeInteger',
		'isNonpositiveInteger',
		'isNegativeInteger',
		'isPositiveInteger',
		'isFinite',
		'isLessThan',
		'isGreaterThan',
		'onInterval',

		// Null:
		'isNull',

		// Undefined:
		'isUndefined',
		'isUndefinedOrNull',

		// Objects:
		'isObject',
		'hasProperties',
		'hasStrictProperties',

		// Arrays:
		'isArray',
		'isStringArray',
		'isStringPrimitiveArray',
		'isAlphanumericArray',
		'isBooleanArray',
		'isBooleanPrimitiveArray',
		'isIntegerArray',
		'isSafeIntegerArray',
		'isNonnegativeIntegerArray',
		'isPositiveIntegerArray',
		'isNegativeIntegerArray',
		'isNonpositiveIntegerArray',
		'isNumberArray',
		'isNumberPrimitiveArray',
		'isArrayArray',
		'isObjectArray',
		'isPrimitiveArray',
		'isLogicalArray',
		'isFunctionArray',
		'isTypedArray',
		'isInt8Array',
		'isUint8Array',
		'isUint8ClampedArray',
		'isInt16Array',
		'isUint16Array',
		'isInt32Array',
		'isUint32Array',
		'isFloat32Array',
		'isFloat64Array',
		'isUnique',
		'isPermutation',
		'isSquareMatrix',
		'isStrictDateArray',
		'hasMax',
		'hasMin',
		'hasNumMax',
		'hasNumMin',
		'hasSize',
		'contains',
		'arrayLike',
		'typedArrayLike',
		'matrixLike',
		'ndarrayLike',
		'isMatrix',

		// Functions:
		'isFunction',
		'isNativeFunction',

		// RegExp:
		'isRegexp',

		// Time:
		'isStrictDate',
		'isTimestamp',
		'isRelativeTime',
		'isAbsoluteTime',

		// Other:
		'isBuffer',
		'isArguments',
		'isPrimitive',
		'isEmpty',
		'hasLength',
		'matches'
	];

	it( 'should export an object', function test() {
		expect( validate ).to.be.an( 'object' );
	});

	// Run the property tests...
	for ( var i = 0; i < properties.length; i++ ) {
		testProperty( properties[ i ] );
	}

	it( 'should include only known properties', function test() {
		assert.deepEqual( Object.keys( validate ).sort(), properties.sort() );
	});

});
