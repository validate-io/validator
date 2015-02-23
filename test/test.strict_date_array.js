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

	describe( 'strict_date_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'strict_date_array', [new Date(), new Date()] ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				{},
				true,
				'5',
				null,
				NaN,
				function(){},
				undefined,
				new Date(),
				[],
				[new Date(), Date.now()],
				[{}]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'strict_date_array', values[i] ) );
			}
		});

	});

});
