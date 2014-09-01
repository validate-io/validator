
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

	describe( 'greater_than', function tests() {

		it( 'should positively validate', function test() {
			var ok;
			
			ok = validate( 'greater_than[1]', 2 );
			assert.ok( ok );
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
				assert.ok( !validate( 'greater_than[1]', values[i] ) );
			}
		});

	}); // end TESTS greater_than

});