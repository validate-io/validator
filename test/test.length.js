
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

	describe( 'length', function tests() {

		it( 'should positively validate', function test() {
			var ok;
			
			ok = validate( 'length[2]', 'ok' );
			assert.ok( ok );

			ok = validate( 'length[2]', [1,2] );
			assert.ok( ok );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					[1,2,3],
					'5',
					'536',
					function(){},
					null,
					NaN,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'length[2]', values[i] ) );
			}
		});

		it( 'should positively validate for a range', function test() {
			var ok;
			
			ok = validate( 'length[1,3]', 'ok' );
			assert.ok( ok );

			ok = validate( 'length[1,3]', [1,2] );
			assert.ok( ok );
		});

		it( 'should negatively validate for a range', function test() {
			var values = [
					5,
					true,
					[],
					[1,2,3,4],
					'',
					'5369',
					function(){},
					null,
					NaN,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'length[1,3]', values[i] ) );
			}
		});

	}); // end TESTS length

});