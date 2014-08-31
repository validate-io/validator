
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

	describe( 'boolean', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'boolean', false ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					'5',
					function(){},
					null,
					{},
					NaN,
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'boolean', values[i] ) );
			}
		});

	}); // end TESTS boolean

});