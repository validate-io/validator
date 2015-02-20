/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'input-validation', function tests() {

	describe( 'regexp', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'regexp', /\.+/ ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				[],
				'5',
				function(){},
				null,
				NaN,
				{},
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'regexp', values[i] ) );
			}
		});

	}); // end TESTS regexp

});
