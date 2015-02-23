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

	describe( 'nonnegative_integer', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'nonnegative_integer', 5 ) );
			assert.ok( validate( 'nonnegative_integer', 0 ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				{},
				true,
				'5',
				null,
				NaN,
				Number.POSITIVE_INFINITY,
				-5,
				function(){},
				undefined,
				[]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'nonnegative_integer', values[i] ) );
			}
		});

	});

});
