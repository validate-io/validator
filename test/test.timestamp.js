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

	describe( 'timestamp', function tests() {

		it( 'should positively validate', function test() {
			var timestamp = Date.now();
			assert.ok( validate( 'timestamp', timestamp ) );
			timestamp = Math.round( timestamp/1000 );
			assert.ok( validate( 'timestamp', timestamp ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				123456,
				new Date(),
				'72ms-ago',
				'2014/07/18-09:34:42',
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
				assert.ok( !validate( 'timestamp', values[i] ) );
			}
		});

	}); // end TESTS timestamp

});
