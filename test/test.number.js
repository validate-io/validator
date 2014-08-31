
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

	describe( 'number', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'number', 5 ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					true,
					[],
					'5',
					function(){},
					null,
					{},
					NaN,
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'number', values[i] ) );
			}
		});

	}); // end TESTS number

});