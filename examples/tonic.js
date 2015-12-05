'use strict';

var validate = require( 'validate.io' );

function is( bool, value, msg ) {
	if ( validate.isRegexp( value ) ) {
		value = value.toString();
	}
	else if ( validate.isFunction( value ) ) {
		value = value.constructor.name;
	}
	else {
		value = JSON.stringify( value );
	}
	console.log( '%s is %s%s', value, ( bool ) ? '' : 'not ', msg );
}

var methods,
	bool,
	vals,
	fcn,
	msg,
	v,
	N, M,
	i, j;

vals = [
	'beep',
	5,
	Math.PI,
	-0,
	true,
	null,
	undefined,
	[],
	{},
	function foo(){},
	/.*/,
	new Date(),
	-1,
	JSON.parse
];

methods = [
	[ validate.isStringPrimitive, 'a string' ],
	[ validate.isNegativeZero, 'negative zero' ],
	[ validate.isPositiveInteger, 'a positive integer' ],
	[ validate.isPositive, 'a positive number' ],
	[ validate.isNegativeInteger, 'a negative integer' ],
	[ validate.isNull, 'null' ],
	[ validate.isUndefined, 'undefined' ],
	[ validate.isBoolean, 'a boolean' ],
	[ validate.isNativeFunction, 'a native function' ],
	[ validate.isFunction, 'a function' ],
	[ validate.isArray, 'an array' ],
	[ validate.isStrictDate, 'a date object' ],
	[ validate.isRegexp, 'a regular expression' ],
	[ validate.isObject, 'an object' ]
];

N = vals.length;
M = methods.length;
for ( i = 0; i < N; i++ ) {
	v = vals[ i ];
	for ( j = 0; j < M; j++ ) {
		fcn = methods[ j ][ 0 ];
		msg = methods[ j ][ 1 ];
		bool = fcn( v );
		if ( bool ) {
			is( bool, v, msg );
			break;
		} else {
			is( bool, v, msg );
		}
	}
}
