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

	describe( 'logical_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'logical_array', [1,0,0,1,1] ) );
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
				[true,false],
				[1, new Number(1)]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'logical_array', values[i] ) );
			}
		});

	});

});
