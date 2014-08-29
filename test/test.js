
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

	// TESTS //

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

	describe( 'object', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'object', {} ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					true,
					'5',
					null,
					function(){},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'object', values[i] ) );
			}
		});

	}); // end TESTS object

	describe( 'array', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'array', [] ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					{},
					true,
					'5',
					null,
					function(){},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'array', values[i] ) );
			}
		});

	}); // end TESTS array

	describe( 'function', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'function', function(){} ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					true,
					'5',
					null,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'function', values[i] ) );
			}
		});

	}); // end TESTS function

	describe( 'string', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'string', '' ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					true,
					function(){},
					null,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'string', values[i] ) );
			}
		});

	}); // end TESTS string

	describe( 'boolean', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'boolean', false ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					'5',
					function(){},
					null,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'boolean', values[i] ) );
			}
		});

	}); // end TESTS boolean

	describe( 'undefined', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'undefined', undefined ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					'5',
					function(){},
					null,
					{},
					true
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'undefined', values[i] ) );
			}
		});

	}); // end TESTS undefined

	describe( 'null', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'null', null ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					[],
					'5',
					function(){},
					true,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'null', values[i] ) );
			}
		});

	}); // end TESTS null

	describe( 'number', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'number', 5 ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					true,
					[],
					'5',
					function(){},
					null,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'number', values[i] ) );
			}
		});

	}); // end TESTS number

	describe( 'integer', function tests() {

		it( 'should positively validate', function test() {
			assert.ok( !validate( 'integer', 5 ) );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5.5,
					true,
					[],
					'5',
					function(){},
					null,
					{},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'integer', values[i] ) );
			}
		});

	}); // end TESTS integer

	describe( 'empty', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'empty', '' );
			assert.ok( !err );

			err = validate( 'empty', [] );
			assert.ok( !err );

			err = validate( 'empty', {} );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[ 1 ],
					'5',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'empty', values[i] ) );
			}
		});

	}); // end TESTS empty

	describe( 'greater_than', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'greater_than[1]', 2 );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					0,
					true,
					[],
					'5',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'greater_than[1]', values[i] ) );
			}
		});

	}); // end TESTS greater_than

	describe( 'less_than', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'less_than[2]', 1 );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					3,
					true,
					[],
					'5',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'less_than[2]', values[i] ) );
			}
		});

	}); // end TESTS less_than

	describe( 'interval', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'interval[0,1]', 0.5 );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					-1,
					2,
					true,
					[],
					'5',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'interval[0,1]', values[i] ) );
			}
		});

	}); // end TESTS interval

	describe( 'length', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'length[2]', 'ok' );
			assert.ok( !err );

			err = validate( 'length[2]', [1,2] );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					[1,2,3],
					'5',
					'536',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'length[2]', values[i] ) );
			}
		});

		it( 'should positively validate for a range', function test() {
			var err;
			
			err = validate( 'length[1,3]', 'ok' );
			assert.ok( !err );

			err = validate( 'length[1,3]', [1,2] );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					[1,2,3,4],
					'',
					'5369',
					function(){},
					null,
					{'foo':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'length[1,3]', values[i] ) );
			}
		});

	}); // end TESTS length

	describe( 'properties', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'has_properties[beep,boop]', {'beep':5,'boop':5} );
			assert.ok( !err );

			err = validate( 'has_properties[beep,boop]', {'beep':5,'boop':5,'bop':5} );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					'5',
					function(){},
					null,
					{'beep':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'has_properties[beep,boop]', values[i] ) );
			}
		});

	}); // end TESTS has_properties

	describe( 'matches', function tests() {

		it( 'should positively validate', function test() {
			var err;
			
			err = validate( 'matches[beep,boop]', 'beep' );
			assert.ok( !err );
		});

		it( 'should negatively validate', function test() {
			var values = [
					5,
					true,
					[],
					'5',
					function(){},
					null,
					{'beep':'bar'},
					undefined
				];

			for ( var i = 0; i < values.length; i++ ) {
				assert.ok( validate( 'matches[beep,boop]', values[i] ) );
			}
		});

	}); // end TESTS matches

	it( 'should support multiple rules', function test() {
		var rules = 'string|matches[beep,boop]|length[3,5]',
			err;

		err = validate( rules, 'beep' );
		assert.ok( !err );
	});

});