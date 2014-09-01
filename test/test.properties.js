
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

	describe( 'properties', function tests() {

		it( 'should positively validate', function test() {
			var ok;
			
			ok = validate( 'properties[beep,boop]', {'beep':5,'boop':5} );
			assert.ok( ok );

			ok = validate( 'properties[beep,boop]', {'beep':5,'boop':5,'bop':5} );
			assert.ok( ok );
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
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'properties[beep,boop]', values[i] ) );
			}
		});

	}); // end TESTS properties

});