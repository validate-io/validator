
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
	'use strict';

	describe( 'function', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'function', function(){} ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					true,
					'5',
					null,
					{},
					NaN,
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'function', values[i] ) );
			}
		});

	}); // end TESTS function

});