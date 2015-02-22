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

	describe( 'primitive_array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'primitive_array', [null,undefined,false,0,''] ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				NaN,
				{},
				true,
				'5',
				null,
				function(){},
				undefined,
				[],
				[[]],
				[{}],
				[new Boolean()],
				[new Number()],
				[new String()]
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'primitive_array', values[i] ) );
			}
		});

	});

});