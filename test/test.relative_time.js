
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

	describe( 'relative_time', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'relative_time', '72000ms-ago' ) );
			assert.ok( validate( 'relative_time', '2d-ago' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					new Date(),
					Date.now(),
					'2014/07/18-09:34:42',
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
				assert.ok( !validate( 'relative_time', values[i] ) );
			}
		});

	}); // end TESTS relative_time

});