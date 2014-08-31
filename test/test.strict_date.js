
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

	describe( 'strict_date', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'strict_date', new Date() ) );
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
					undefined,
					Date.now()
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'strict_date', values[i] ) );
			}
		});

	}); // end TESTS strict_date

});