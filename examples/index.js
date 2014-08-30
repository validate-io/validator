
var validate = require( './../lib' );


// CLASS //

function Beep() {
	this._boop = '';
	this._bap = 11;
	this._foo = 'beep';
	return this;
}

Beep.prototype.boop = function( value ) {
	var rules = 'string|length[0,12]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'boop()::invalid input argument. Must be a string less than 13 characters long.' );
	}
	this._boop = value;
	return this;
};

Beep.prototype.bap = function( value ) {
	var rules = 'number|greater_than[10]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'bap()::invalid input argument. Must be a number greater than 10.' );
	}
	this._bap = value;
	return this;
};

Beep.prototype.foo = function( value ) {
	var rules = 'matches[beep,boop,bap,foo,bar]';
	if ( validate( rules, value ) ) {
		throw new TypeError( 'foo()::invalid input argument. Must be one of the following: beep,boop,bap,foo,bar.' );
	}
	this._foo = value;
	return this;
};

Beep.prototype.toString = function() {
	var str = this._boop + ' ' + this._foo + ' ' + this._bap + '.';
	return str;
};


// APPLICATION //

var beep = new Beep();

beep
	.boop( 'Hello' )
	.bap( 42 )
	.foo( 'bar' );

console.log( beep.toString() );
