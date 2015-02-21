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

	describe( 'primitive', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'primitive', '' ) );
			assert.ok( validate( 'primitive', 0 ) );
			assert.ok( validate( 'primitive', false ) );
			assert.ok( validate( 'primitive', null ) );
			assert.ok( validate( 'primitive', undefined ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				{},
				function(){},
				[],
				new Boolean(),
				new String(),
				new Number(),
				new Object(),
				new Array()
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'primitive', values[i] ) );
			}
		});

	});

});
