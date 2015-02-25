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

	describe( 'nonnegative', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'nonnegative', 0 ) );
			assert.ok( validate( 'nonnegative', Math.PI ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				-5,
				{},
				true,
				'5',
				null,
				NaN,
				function(){},
				undefined,
				[]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'nonnegative', values[i] ) );
			}
		});

	});

});
