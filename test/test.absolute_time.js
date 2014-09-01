
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

	describe( 'absolute_time', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'absolute_time', '2014/07/18 9:42' ) );
			assert.ok( !validate( 'absolute_time', '2014/07/18-09:34:42' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					1,
					new Date(),
					'72ms-ago',
					Date.now(),
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
				assert.ok( validate( 'absolute_time', values[i] ) );
			}
		});

	}); // end TESTS absolute_time

});