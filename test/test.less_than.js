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

	describe( 'less_than', function tests() {

		it( 'should positively validate', function test() {
			var ok;

			ok = validate( 'less_than[2]', 1 );
			assert.ok( ok );
		});

		it( 'should negatively validate', function test() {
			var values = [
				3,
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
				assert.ok( !validate( 'less_than[2]', values[i] ) );
			}
		});

	}); // end TESTS less_than

});
