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

	describe( 'array_max', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'array_max[4]', ['3.14','2'] ) );
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
				['2','3']
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'array_max[1]', values[i] ) );
			}
		});

	});

});
