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

	describe( 'matches', function tests() {

		it( 'should positively validate', function test() {
			var ok;

			ok = validate( 'matches[beep,boop]', 'beep' );
			assert.ok( ok );

			ok = validate( 'matches[5,7,9]', 5 );
			assert.ok( ok );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				true,
				[],
				'5',
				function(){},
				null,
				NaN,
				{'beep':'bar'},
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'matches[beep,boop]', values[i] ) );
			}
		});

	}); // end TESTS matches

});
