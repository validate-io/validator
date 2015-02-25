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

	describe( 'negative', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'negative', -5 ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				0,
				{},
				true,
				'5',
				null,
				NaN,
				function(){},
				undefined,
				[]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'negative', values[i] ) );
			}
		});

	});

});
