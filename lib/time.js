'use strict';

// VALIDATE //

var validate = {};

validate.isStrictDate = require( 'validate.io-strict-date' );

validate.isTimestamp = require( 'validate.io-timestamp' );

validate.isAbsoluteTime = require( 'validate.io-absolute-time' );

validate.isRelativeTime = require( 'validate.io-relative-time' );


// EXPORTS //

module.exports = validate;
