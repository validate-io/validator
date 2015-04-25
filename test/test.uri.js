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

	describe( 'uri', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( validate( 'uri', 'http://google.com' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
				5,
				'',
				'foo',
				'foo@bar',
				'://foo/',
				'http://<foo>',
				'http:////foo.html',
				'http://example.w3.org/%a',
				'http://example.w3.org/%a/foo',
				'http://example.w3.org/%at',
				true,
				[],
				function(){},
				null,
				{},
				NaN,
				undefined
			];

			for ( var i = 0; i < values.length; i++ ) {
				assert.notOk( validate( 'uri', values[i] ) );
			}
		});

	});

});
