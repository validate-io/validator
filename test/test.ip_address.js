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

	describe( 'ip_address', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'ip_address', '192.168.17.92' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				'256.255.92.1',
				'192.168.17.92.1',
				'1.1',
				'10.10.10',
				true,
				[],
				'5',
				function(){},
				null,
				{},
				NaN,
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( !validate( 'ip_address', values[i] ) );
			}
		});

	}); // end TESTS ip_address

});
