/**
*
*	VALIDATOR
*
*
*	DESCRIPTION:
*		- Utility for validating input arguments.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// VALIDATE //

var validate = {};

/**
* Primitives.
*/
validate.primitive = require( 'validate.io-primitive' );


/**
* Objects.
*/
validate.object = require( 'validate.io-object' );
validate.json = require( 'validate.io-json' );

/**
* METHOD: properties( value, properties )
*	Validates if a value has properties.
*
* @param {Object} value - value to be validated
* @param {String} properties - serialized string of properties
* @returns {Boolean} boolean indicating whether value has desired properties
*/
var hasProperties = require( 'validate.io-properties' );
validate.properties = function( value, properties ) {
	properties = properties.split( ',' );
	return hasProperties( value, properties );
}; // end METHOD properties()

/**
* METHOD: strict_properties( value, properties )
*	Validates if a value only has a specified set of properties.
*
* @param {Object} value - value to be validated
* @param {String} properties - serialized string of properties
* @returns {Boolean} boolean indicating whether value has only the desired properties
*/
var strictProperties = require( 'validate.io-strict-properties' );
validate.strict_properties = function( value, properties ) {
	properties = properties.split( ',' );
	return strictProperties( value, properties );
}; // end METHOD strict_properties()


/**
* Arrays.
*/
validate.array = require( 'validate.io-array' );
validate.primitive_array = require( 'validate.io-primitive-array' );
validate.boolean_array = require( 'validate.io-boolean-array' );
validate.string_array = require( 'validate.io-string-array' );
validate.alphanumeric_array = require( 'validate.io-alphanumeric-array' );
validate.number_array = require( 'validate.io-number-array' );
validate.number_array_max = require( 'validate.io-number-array-max' );
validate.integer_array = require( 'validate.io-integer-array' );
validate.nonnegative_integer_array = require( 'validate.io-nonnegative-integer-array' );
validate.array_array = require( 'validate.io-array-array' );
validate.object_array = require( 'validate.io-object-array' );
validate.strict_date_array = require( 'validate.io-strict-date-array' );

validate.square_matrix = require( 'validate.io-square-matrix' );

validate.unique = require( 'validate.io-unique' );

/**
* METHOD: permutation( value, arr )
*	Validates if a value is an array permutation.
*
* @param {*} value - value to be validate
* @param {Array} arr - array of values which can be permuted
* @returns {Boolean} boolean indicating if the value is an array permutation
*/
var permutation = require( 'validate.io-permutation' );
validate.permutation = function( value, arr ) {
	arr = arr.split( ',' );
	return permutation( arr, value );
}; // end METHOD permutation


/**
* Functions.
*/
validate.function = require( 'validate.io-function' );


/**
* Strings.
*/
validate.string = require( 'validate.io-string' );
validate.alphanumeric = require( 'validate.io-alphanumeric' );
validate.lowercase = require( 'validate.io-lowercase' );
validate.uppercase = require( 'validate.io-uppercase' );


/**
* Booleans.
*/
validate.boolean = require( 'validate.io-boolean' );


/**
* Regular expressions.
*/
validate.regexp = require( 'validate.io-regexp' );


/**
* Time.
*/
validate.strict_date = require( 'validate.io-strict-date' );

validate.timestamp = require( 'validate.io-timestamp' );

validate.absolute_time = require( 'validate.io-absolute-time' );

validate.relative_time = require( 'validate.io-relative-time' );


/**
* Undefined.
*/
validate.undefined = require( 'validate.io-undefined' );


/**
* Null.
*/
validate.null = require( 'validate.io-null' );


/**
* Numbers.
*/
validate.number = require( 'validate.io-number' );

validate.nonnegative = require( 'validate.io-nonnegative' );

validate.positive = require( 'validate.io-positive' );

validate.integer = require( 'validate.io-integer' );

validate.nonnegative_integer = require( 'validate.io-nonnegative-integer' );

validate.positive_integer = require( 'validate.io-positive-integer' );

validate.nonpositive_integer = require( 'validate.io-nonpositive-integer' );

validate.negative_integer = require( 'validate.io-negative-integer' );

validate.float = require( 'validate.io-float' );

validate.nan = require( 'validate.io-nan' );

validate.finite = require( 'validate.io-finite' );

/**
* METHOD: greater_than( value, comparator )
*	Validates if a value is greater than a comparator.
*
* @param {Number} value - value to be validated
* @param {String} comparator - value against which to make the comparison; converted to a float
* @returns {Boolean} boolean indicating whether value is greater than comparator
*/
var greaterThan = require( 'validate.io-greater-than' );
validate.greater_than = function( value, comparator ) {
	return greaterThan( value, parseFloat( comparator ) );
}; // end METHOD greater_than()

/**
* METHOD: less_than( value, comparator )
*	Validates if a value is less than a comparator.
*
* @param {Number} value - value to be validated
* @param {String} comparator - value against which to make the comparison; converted to a float
* @returns {Boolean} boolean indicating whether value is less than comparator
*/
var lessThan = require( 'validate.io-less-than' );
validate.less_than = function( value, comparator ) {
	return lessThan( value, parseFloat( comparator ) );
}; // end METHOD less_than()

/**
* METHOD: interval( value, interval )
*	Validates if a value resides on a specified interval (inclusive).
*
* @param {Number} value - value to be validated
* @param {String} interval - interval used to determine inclusion; converted to an array of floats
* @returns {Boolean} boolean indicating whether value is within a specified interval
*/
var onInterval = require( 'validate.io-interval' );
validate.interval = function( value, interval ) {
	// Convert the interval bounds to an array:
	interval = interval.split( ',' );

	return onInterval( value, parseFloat( interval[0] ), parseFloat( interval[1] ) );
}; // end METHOD interval()


/**
* Multi-type methods.
*/
validate.empty = require( 'validate.io-empty' );

validate.matches = require( 'validate.io-matches' );

/**
* METHOD: length( value, length )
*	Validates if a value is of a specific length.
*
* @param {String|Array} value - value to be validated
* @param {String} length - either a single length or an acceptable interval; converted to float(s)
* @returns {Boolean} boolean indicating whether value is either a specific length or within a specified interval
*/
var isLength = require( 'validate.io-length' );
validate.length = function( value, len ) {
	len = len.split( ',' );
	for ( var i = 0; i < len.length; i++ ) {
		len[ i ] = parseFloat( len[ i ] );
	}
	if ( len.length === 1 ) {
		return isLength( value, len[0] );
	}
	return isLength( value, len[0], len[1] );
}; // end METHOD length()


/**
* Other.
*/
validate.ip_address = require( 'validate.io-ip-address' );


// VALIDATE //

/**
* FUNCTION: validator( rules, value )
*	Validates that an input value conforms to specified rules. Returns the first invalidated rule. Returns `null` is value meets specifications.
*
* @param {String} rules - serialized list of rules separated by pipes '|'
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value pass validation
*/
function validator( rules, value ) {
	var index,
		rule,
		params,
		bool;

	if ( arguments.length !== 2 ) {
		throw new Error( 'validate()::invalid number of input arguments. Validate expects two input arguments: string of rules and the value to be validated.' );
	}
	if ( typeof rules !== 'string' ) {
		throw new TypeError( 'validate()::invalid input argument. Rules must be provided as a serialized string.' );
	}
	// Split the rules:
	rules = rules.split( '|' );

	// For each rule, check that the rule is valid and then perform validation...
	for ( var i = 0; i < rules.length; i++ ) {
		rule = rules[ i ];
		params = null;

		// Determine if the rule has parameters and isolate the rule name...
		index = rule.indexOf( '[' );
		if ( index !== -1 ) {
			rule = rule.substr( 0, index );
			params = rules[ i ].match( /\[([^\]]+)\]/ )[ 1 ];
		}
		// Check if the rule exists...
		if ( !validate[ rule ] ) {
			throw new Error( 'validate()::invalid input argument. Unrecognized rule: ' + rule );
		}
		// Perform the validation:
		bool = validate[ rule ]( value, params );

		if ( !bool ) {
			return false;
		}
	}
	return true;
} // end FUNCTION validator()


// EXPORTS //

module.exports = validator;
