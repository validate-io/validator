
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	Validator = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'input-validation', function tests() {
	'use strict';

	// SETUP //

	var validate;

	// Any tasks to run before each test:
	beforeEach( function() {
		validate = new Validator();
	});


	// TESTS //

	it( 'should export a constructor', function test() {
		expect( Validator ).to.be.a( 'function' );
	});

	describe( '', function tests() {

		it( 'should do something' );

	});

});