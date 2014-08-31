
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

	describe( 'strict_properties', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'strict_properties[beep,boop]', {'beep':5,'boop':5} );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					'5',
					function(){},
					null,
					NaN,
					{'beep':'bar'},
					{'beep':1,'boop':2,'bap':3},
					{'beep':1,'bap':3},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'strict_properties[beep,boop]', values[i] ) );
			}
		});

	}); // end TESTS strict_properties

});