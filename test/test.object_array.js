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

	describe( 'object_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'object_array', [{},{}] ) );
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
				[{},null]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'object_array', values[i] ) );
			}
		});

	}); // end TESTS object_array

});
