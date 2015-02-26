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

	describe( 'size', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'size[2,2]', [[1,2],[1,2]] ) );
			assert.ok( validate( 'size[1,*,2]', [[[1,2],[1,2]]] ) );
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
				[],
				[1,2],
				[[1,2],''],
				[[1,2],[1]]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'size[2,3]', values[i] ) );
			}
		});

	});

});
