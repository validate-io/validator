
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
	'use strict';

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided the correct number of input arguments', function test() {
		expect( foo ).to.throw( Error );
		expect( bar ).to.throw( Error );
		function foo() {
			validate();
		}
		function bar() {
			validate( 'beep' );
		}
	});

	it( 'should throw an error if validation rules are not provided as a serialized string', function test() {
		var values = [
				5,
				[],
				true,
				{},
				null,
				NaN,
				function(){},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		
		function badValue( value ) {
			return function() {
				validate( value, 0 );
			};
		}
	});

	it( 'should throw an error if not provided an unknown rule', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			validate( 'unknown_rule_beep_boop', 0 );
		}
	});

	it( 'should support multiple rules', function test() {
		var rules = 'string|matches[beep,boop]|length[3,5]',
			err;

		err = validate( rules, 'beep' );
		assert.ok( !err );
	});

});