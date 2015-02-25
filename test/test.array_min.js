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

	describe( 'array_min', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'array_min[0]', ['3.14','2'] ) );
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
				['1','2']
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'array_min[999999]', values[i] ) );
			}
		});

	});

});
