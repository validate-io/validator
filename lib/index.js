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

(function() {
	'use strict';

	// VARIABLES //

	var PATTERNS = {};

	PATTERNS.ip = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;

	// Absolute time formatting; e.g., 2014/07/18-9:34:42:
	PATTERNS.absolute = /^\d{4}\/\d{1,2}\/\d{1,2}$|^\d{4}\/\d{1,2}\/\d{1,2}\s|\-\d{1,2}:\d{2}$|^\d{4}\/\d{1,2}\/\d{1,2}\s|\-\d{1,2}:\d{2}:\d{2}$/;

	// Relative time formatting; e.g., 72000ms-ago:
	PATTERNS.relative = /^\d+ms|[smhdwmny]\-ago/;

	// Seconds or milliseconds; e.g., Date.now():
	PATTERNS.timestamp = /^\d{10}$|^\d{13}$/;


	// VALIDATE //

	var validate = {};

	
	/**
	* Objects.
	*/
	validate.object = require( 'validate.io-object' );

	
	/**
	* Arrays.
	*/
	validate.array = require( 'validate.io-array' );

	
	/**
	* Functions.
	*/
	validate.function = require( 'validate.io-function' );

	
	/**
	* Strings.
	*/
	validate.string = require( 'validate.io-string' );

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

	validate.integer = require( 'validate.io-integer' );

	validate.float = require( 'validate.io-float' );

	validate.nan = require( 'validate.io-nan' );

	/**
	* METHOD: greater_than( value, comparator )
	*	Validates if a value is greater than a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {String} comparator - value against which to make the comparison; converted to a float
	* @returns {Boolean} boolean indicating whether value is greater than comparator
	*/
	var greater_than = require( 'validate.io-greater-than' );
	validate.greater_than = function( value, comparator ) {
		return greater_than( value, parseFloat( comparator ) );
	}; // end METHOD greater_than()

	/**
	* METHOD: less_than( value, comparator )
	*	Validates if a value is less than a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {String} comparator - value against which to make the comparison; converted to a float
	* @returns {Boolean} boolean indicating whether value is less than comparator
	*/
	var less_than = require( 'validate.io-less-than' );
	validate.less_than = function( value, comparator ) {
		return less_than( value, parseFloat( comparator ) );
	}; // end METHOD less_than()

	
	/**
	* Empty
	*/
	validate.empty = require( 'validate.io-empty' );

	/**
	* METHOD: interval( value, interval )
	*	Validates if a value resides within a specified interval (inclusive).
	*
	* @param {Number} value - value to be validated
	* @param {String} interval - interval used to determine inclusion; converted to an array of floats
	* @returns {Boolean} boolean indicating whether value is within a specified interval
	*/
	validate.interval = function( value, interval ) {
		if ( typeof value !== 'number' || value !== value ) {
			return false;
		}

		// Convert the interval bounds to an array:
		interval = interval.split( ',' );

		return ( value >= parseFloat( interval[0] ) && value <= parseFloat( interval[1] ) );
	}; // end METHOD interval()

	/**
	* METHOD: length( value, length )
	*	Validates if a value is of a specific length.
	*
	* @param {String|Array} value - value to be validated
	* @param {String} length - either a single length or an acceptable interval; converted to float
	* @returns {Boolean} boolean indicating whether value is within a specified interval
	*/
	validate.length = function( value, length ) {
		if ( !Array.isArray( value ) && typeof value !== 'string' ) {
			return false;
		}

		// Convert the length bounds to an array:
		length = length.split( ',' );

		if ( length.length === 1 ) {
			return ( value.length === parseFloat( length[0] ) );
		}

		return ( value.length >= parseFloat( length[0] ) && value.length <= parseFloat( length[1] ) );
	}; // end METHOD length()

	/**
	* METHOD: properties( value, properties )
	*	Validates if a value has properties.
	*
	* @param {Object} value - value to be validated
	* @param {String} properties - serialized string of properties
	* @returns {Boolean} boolean indicating whether value has desired properties
	*/
	validate.properties = function( value, properties ) {

		// FIXME: do not call fcn.
		if ( !this.object( value ) ) {
			return false;
		}

		// Convert the properties to an array:
		properties = properties.split( ',' );

		// Check for each properties, exiting at the first property which is not found...
		for ( var i = 0; i < properties.length; i++ ) {
			if ( !value.hasOwnProperty( properties[i] ) ) {
				return false;
			}
		}
		return true;
	}; // end METHOD properties()

	/**
	* METHOD: strict_properties( value, properties )
	*	Validates if a value only has a specified set of properties.
	*
	* @param {Object} value - value to be validated
	* @param {String} properties - serialized string of properties
	* @returns {Boolean} boolean indicating whether value has only the desired properties
	*/
	validate.strict_properties = function( value, properties ) {

		// FIXME: do not call fcn.
		if ( !this.object( value ) ) {
			return false;
		}

		// Get the object keys:
		var keys = Object.keys( value );

		// Convert the properties to an array:
		properties = properties.split( ',' );

		// Check that we have the same number of properties:
		if ( keys.length !== properties.length ) {
			return false;
		}

		// Check for each properties, exiting at the first property which is not found...
		for ( var i = 0; i < properties.length; i++ ) {
			if ( !value.hasOwnProperty( properties[i] ) ) {
				return false;
			}
		}
		return true;
	}; // end METHOD strict_properties()

	/**
	* METHOD: matches( value, options )
	*	Validates if a value matches an allowed value.
	*
	* @param {String|Number} value - value to be validated (numeric values are converted to strings)
	* @param {String} options - possible matches
	* @returns {Boolean} boolean indicating whether value matches an allowed value
	*/
	validate.matches = function( value, options ) {
		var type = typeof value;
		if ( type !== 'string' && ( type !== 'number' || value !== value ) ) {
			return false;
		}
		if ( type === 'number' ) {
			value = value.toString();
		}

		// Convert the match options to an array:
		options = options.split( ',' );

		return ( options.indexOf( value ) !== -1 );
	}; // end METHOD matches()


	// VALIDATE //

	/**
	* FUNCTION: validator( rules, value )
	*	Validates that an input value conforms to specified rules. Returns the first invalidated rule. Returns `null` is value meets specifications.
	*
	* @param {String} rules - serialized list of rules separated by pipes '|'
	* @param {*} value - value to be validated
	* @returns {null|Object|null} null or object containing the rule name and value which did not validate.
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
				return {
					'rule': rule,
					'value': value
				};
			}
		}
		return null;
	} // end FUNCTION validator()


	// EXPORTS //

	module.exports = validator;

})();
