/* global require, describe, it */
'use strict';

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

	describe( 'empty', function tests() {

		it( 'should positively validate', function test() {
			var ok;

			ok = validate( 'empty', '' );
			assert.ok( ok );

			ok = validate( 'empty', [] );
			assert.ok( ok );

			ok = validate( 'empty', {} );
			assert.ok( ok );
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
				assert.ok( !validate( 'empty', values[i] ) );
			}
		});

	}); // end TESTS empty

});
