'use strict';

// MODULES //

var merge = require( 'utils-merge2' )();


// VARIABLES //

var tmp;


// VALIDATE //

var validate = {};

/**
* Strings.
*/
tmp = require( './strings.js' );
validate = merge( validate, tmp );


/**
* Booleans.
*/
tmp = require( './booleans.js' );
validate = merge( validate, tmp );


/**
* Numbers.
*/
tmp = require( './numbers.js' );
validate = merge( validate, tmp );


/**
* Undefined.
*/
validate.isUndefined = require( 'validate.io-undefined' );
validate.isUndefinedOrNull = require( 'validate.io-undefined-or-null' );


/**
* Null.
*/
validate.isNull = require( 'validate.io-null' );


/**
* Objects.
*/
tmp = require( './objects.js' );
validate = merge( validate, tmp );


/**
* Arrays.
*/
tmp = require( './arrays.js' );
validate = merge( validate, tmp );


/**
* Functions.
*/
tmp = require( './functions.js' );
validate = merge( validate, tmp );


/**
* Regular expressions.
*/
validate.isRegexp = require( 'validate.io-regexp' );


/**
* Time.
*/
tmp = require( './time.js' );
validate = merge( validate, tmp );


/**
* Other.
*/
validate.isPrimitive = require( 'validate.io-primitive' );

validate.isEmpty = require( 'validate.io-empty' );

validate.matches = require( 'validate.io-matches' );

validate.hasLength = require( 'validate.io-length' );

validate.isBuffer = require( 'validate.io-buffer' );

validate.isArguments = require( 'validate.io-arguments' );



// EXPORTS //

module.exports = validate;
