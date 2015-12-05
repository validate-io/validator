'use strict';

// VALIDATE //

var validate = {};

validate.isObject = require( 'validate.io-object' );

validate.isJSON = require( 'validate.io-json' );

validate.hasProperties = require( 'validate.io-properties' );

validate.hasStrictProperties = require( 'validate.io-strict-properties' );


// EXPORTS //

module.exports = validate;
