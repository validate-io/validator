
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

	describe( 'uppercase', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'uppercase', 'HELLO' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					true,
					function(){},
					null,
					{},
					NaN,
					'Hello',
					'hello',
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'uppercase', values[i] ) );
			}
		});

	}); // end TESTS uppercase

});