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

	describe( 'nan', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'nan', NaN ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				true,
				[],
				'5',
				function(){},
				null,
				{},
				5,
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'nan', values[i] ) );
			}
		});

	}); // end TESTS nan

});
