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

	describe( 'square_matrix', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'square_matrix', [[1,2],[1,2]] ) );
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
				[[]],
				[[1,2],[1]],
				[[1,2]]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'square_matrix', values[i] ) );
			}
		});

	});

});
