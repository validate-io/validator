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

	describe( 'boolean_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'boolean_array', [true,false] ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				{},
				true,
				'5',
				null,
				function(){},
				undefined,
				[],
				[true,2]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'boolean_array', values[i] ) );
			}
		});

	}); // end TESTS boolean_array

});
