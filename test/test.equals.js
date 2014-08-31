
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

	describe( 'equals', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'equals[1]', 1 );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					0,
					true,
					[],
					'5',
					function(){},
					null,
					NaN,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'equals[1]', values[i] ) );
			}
		});

	}); // end TESTS equals

});