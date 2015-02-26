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

	describe( 'nonnegative_integer_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'nonnegative_integer_array', [2,0,1] ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				{},
				true,
				'5',
				null,
				NaN,
				function(){},
				undefined,
				[],
				[2,-1,1],
				[Math.PI]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'nonnegative_integer_array', values[i] ) );
			}
		});

	});

});