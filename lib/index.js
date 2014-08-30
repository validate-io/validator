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

	// VALIDATOR //

	/**
	* FUNCTION: Validator()
	*	Validator constructor. Creates a new validator instance.
	*
	* @constructor
	* @returns {Validator} Validator instance
	*/
	function Validator() {
		return this;
	} // end FUNCTION Validator()

	/**
	* METHOD: object( value )
	*	Validates if a value is a plain object; e.g., {}.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a plain object
	*/
	Validator.prototype.object = function( value ) {
		if ( typeof value !== 'object' || value === null || Array.isArray( value ) === true ) {
			return false;
		}
		return true;
	}; // end METHOD object()

	/**
	* METHOD: array( value )
	*	Validates if a value is an array.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is an array
	*/
	Validator.prototype.array = function( value ) {
		if ( !Array.isArray( value ) ) {
			return false;
		}
		return true;
	}; // end METHOD array()

	/**
	* METHOD: function( value )
	*	Validates if a value is a function.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a function
	*/
	Validator.prototype.function = function( value ) {
		if ( typeof value !== 'function' ) {
			return false;
		}
		return true;
	}; // end METHOD function()

	/**
	* METHOD: string( value )
	*	Validates if a value is a string.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a string
	*/
	Validator.prototype.string = function( value ) {
		if ( typeof value !== 'string' ) {
			return false;
		}
		return true;
	}; // end METHOD string()

	/**
	* METHOD: boolean( value )
	*	Validates if a value is a boolean.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a boolean
	*/
	Validator.prototype.boolean = function( value ) {
		if ( typeof value !== 'boolean' ) {
			return false;
		}
		return true;
	}; // end METHOD boolean()

	/**
	* METHOD: regexp( value )
	*	Validates if a value is a regular expression.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a regular expression
	*/
	Validator.prototype.regexp = function( value ) {
		if ( !(value instanceof RegExp) ) {
			return false;
		}
		return true;
	}; // end METHOD regexp()

	/**
	* METHOD: undefined( value )
	*	Validates if a value is undefined.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is undefined
	*/
	Validator.prototype.undefined = function( value ) {
		if ( typeof value !== 'undefined' ) {
			return false;
		}
		return true;
	}; // end METHOD undefined()

	/**
	* METHOD: null( value )
	*	Validates if a value is null.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is null
	*/
	Validator.prototype.null = function( value ) {
		if ( value !== null ) {
			return false;
		}
		return true;
	}; // end METHOD null()

	/**
	* METHOD: number( value )
	*	Validates if a value is a number.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a number
	*/
	Validator.prototype.number = function( value ) {
		if ( typeof value !== 'number' || value !== value ) {
			return false;
		}
		return true;
	}; // end METHOD number()

	/**
	* METHOD: integer( value )
	*	Validates if a value is an integer.
	*
	* @param {Number} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is an integer
	*/
	Validator.prototype.integer = function( value ) {
		if ( !this.number( value ) || value !== ( value | 0 ) ) {
			return false;
		}
		return true;
	}; // end METHOD integer()

	/**
	* METHOD: float( value )
	*	Validates if a value is a float.
	*
	* @param {Number} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a float
	*/
	Validator.prototype.float = function( value ) {
		if ( !this.number( value ) || value === ( value | 0 ) ) {
			return false;
		}
		return true;
	}; // end METHOD float()

	/**
	* METHOD: nan( value )
	*	Validates if a value is NaN.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether the value is a NaN
	*/
	Validator.prototype.nan = function( value ) {
		if ( typeof value !== 'number' || value === value ) {
			return false;
		}
		return true;
	}; // end METHOD nan()

	/**
	* METHOD: empty( value )
	*	Validates if a value is empty: '', [], {}.
	*
	* @param {String|Array|Object} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is empty
	*/
	Validator.prototype.empty = function( value ) {
		if ( typeof value === 'string' && !value.length ) {
			return true;
		}
		if ( Array.isArray( value ) && !value.length ) {
			return true;
		}
		if ( this.object( value ) && !Object.keys( value ).length ) {
			return true;
		}
		return false;
	}; // end METHOD empty()

	/**
	* METHOD: equals( value, comparator )
	*	Validates if a value equals a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {String} comparator - value against which to make the comparison; converted to a float
	* @returns {Boolean} boolean indicating whether value is equal comparator
	*/
	Validator.prototype.equals = function( value, comparator ) {
		if ( !this.number( value ) ) {
			return false;
		}
		if ( value !== parseFloat( comparator ) ) {
			return false;
		}
		return true;
	}; // end METHOD equals()

	/**
	* METHOD: greater_than( value, comparator )
	*	Validates if a value is greater than a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {String} comparator - value against which to make the comparison; converted to a float
	* @returns {Boolean} boolean indicating whether value is greater than comparator
	*/
	Validator.prototype.greater_than = function( value, comparator ) {
		if ( !this.number( value ) ) {
			return false;
		}
		if ( value <= parseFloat( comparator ) ) {
			return false;
		}
		return true;
	}; // end METHOD greater_than()

	/**
	* METHOD: less_than( value, comparator )
	*	Validates if a value is less than a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {String} comparator - value against which to make the comparison; converted to a float
	* @returns {Boolean} boolean indicating whether value is less than comparator
	*/
	Validator.prototype.less_than = function( value, comparator ) {
		if ( !this.number( value ) ) {
			return false;
		}
		if ( value >= parseFloat( comparator ) ) {
			return false;
		}
		return true;
	}; // end METHOD less_than()

	/**
	* METHOD: interval( value, interval )
	*	Validates if a value resides within a specified interval (inclusive).
	*
	* @param {Number} value - value to be validated
	* @param {String} interval - interval used to determine inclusion; converted to an array of floats
	* @returns {Boolean} boolean indicating whether value is within a specified interval
	*/
	Validator.prototype.interval = function( value, interval ) {
		if ( !this.number( value ) ) {
			return false;
		}

		// Convert the interval bounds to an array:
		interval = interval.split( ',' );

		if ( value < parseFloat( interval[0] ) ) {
			return false;
		}
		if ( value > parseFloat( interval[1] ) ) {
			return false;
		}
		return true;
	}; // end METHOD interval()

	/**
	* METHOD: length( value, length )
	*	Validates if a value is of a specific length.
	*
	* @param {String|Array} value - value to be validated
	* @param {String} length - either a single length or an acceptable interval; converted to float
	* @returns {Boolean} boolean indicating whether value is within a specified interval
	*/
	Validator.prototype.length = function( value, length ) {
		if ( !Array.isArray( value ) && !this.string( value ) ) {
			return false;
		}

		// Convert the length bounds to an array:
		length = length.split( ',' );

		if ( length.length === 1 ) {
			if ( value.length !== parseFloat( length[0] ) ) {
				return false;
			}
		}

		if ( value.length < parseFloat( length[0] ) ) {
			return false;
		}
		if ( value.length > parseFloat( length[1] ) ) {
			return false;
		}
		return true;
	}; // end METHOD length()

	/**
	* METHOD: has_properties( value, properties )
	*	Validates if a value has properties.
	*
	* @param {Object} value - value to be validated
	* @param {String} properties - serialized string of properties
	* @returns {Boolean} boolean indicating whether value has desired properties
	*/
	Validator.prototype.has_properties = function( value, properties ) {
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
	}; // end METHOD has_properties()

	/**
	* METHOD: matches( value, options )
	*	Validates if a value matches an allowed value.
	*
	* @param {String|Number} value - value to be validated (numeric values are converted to strings)
	* @param {String} options - possible matches
	* @returns {Boolean} boolean indicating whether value matches an allowed value
	*/
	Validator.prototype.matches = function( value, options ) {
		if ( !this.string( value ) && !this.number( value ) ) {
			return false;
		}
		if ( this.number( value ) ) {
			value = value.toString();
		}

		// Convert the match options to an array:
		options = options.split( ',' );

		if ( options.indexOf( value ) === -1 ) {
			return false;
		}
		return true;
	}; // end METHOD matches()


	// INIT //

	var validator = new Validator();


	// VALIDATE //

	/**
	* FUNCTION: validate( rules, value )
	*	Validates that an input value conforms to specified rules. Returns the first invalidated rule. Returns `null` is value meets specifications.
	*
	* @param {String} rules - serialized list of rules separated by pipes '|'
	* @param {*} value - value to be validated
	* @returns {null|Object|null} null or object containing the rule name and value which did not validate.
	*/
	function validate( rules, value ) {
		var index,
			rule,
			params,
			bool;

		if ( arguments.length !== 2 ) {
			throw new Error( 'validate()::invalid number of input arguments. Validate expects two input arguments: string of rules and the value to be validated.' );
		}
		if ( !validator.string( rules ) ) {
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
			if ( !validator[ rule ] ) {
				throw new Error( 'validate()::invalid input argument. Unrecognized rule: ' + rule );
			}

			// Perform the validation:
			bool = validator[ rule ]( value, params );

			if ( !bool ) {
				return {
					'rule': rule,
					'value': value
				};
			}
		}
		return null;
	} // end FUNCTION validate()


	// EXPORTS //

	module.exports = validate;

})();
