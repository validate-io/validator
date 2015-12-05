'use strict';

// VALIDATE //

var validate = {};

validate.isString = require( 'validate.io-string' );

validate.isStringPrimitive = require( 'validate.io-string-primitive' );

validate.isAlphanumeric = require( 'validate.io-alphanumeric' );

validate.isLowercase = require( 'validate.io-lowercase' );

validate.isUppercase = require( 'validate.io-uppercase' );

validate.isAlphagram = require( 'validate.io-alphagram' );

validate.isAnagram = require( 'validate.io-anagram' );

validate.isBinaryString = require( 'validate.io-binary-string' );

validate.isIPAddress = require( 'validate.io-ip-address' );

validate.isURI = require( 'validate.io-uri' );

validate.isEmailAddress = require( 'validate.io-email-address' );

validate.isHexColor = require( 'validate.io-color-hexadecimal' );


// EXPORTS //

module.exports = validate;
