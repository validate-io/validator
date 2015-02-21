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

	describe( 'alphanumeric', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'alphanumeric', 'b1e2e3p' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				'',
				5,
				[],
				true,
				function(){},
				null,
				{},
				NaN,
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'alphanumeric', values[i] ) );
			}
		});

	}); // end TESTS alphanumeric

});
