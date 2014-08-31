
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

	describe( 'empty', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'empty', '' );
			assert.ok( !err );

			err = validate( 'empty', [] );
			assert.ok( !err );

			err = validate( 'empty', {} );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[ 1 ],
					'5',
					function(){},
					null,
					NaN,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'empty', values[i] ) );
			}
		});

	}); // end TESTS empty

});