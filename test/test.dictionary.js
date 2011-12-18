/**
 * @author Camille Reynders

 */
var dictionary;
var key = {};
var value = {};
var foo = {};

module( 'creynders.Dictionary', {
	setup : function(){
		dictionary = new creynders.Dictionary();
	},
	teardown : function(){
		dictionary = undefined;
	}
})

test( 'getValue', function(){
	dictionary.add( key, value );
	strictEqual( dictionary.getValue( key ), value, 'should be strictly equal')
})

test( 'hasValue', function(){
	dictionary.add( key, value );
	ok( dictionary.hasValue( key ) );
})

test( 'remove', function(){
	dictionary.add( key, value );
	dictionary.remove( key );
	ok( ! dictionary.hasValue( key ) );
})

test( 'replace', function(){
    dictionary.add( key , value );
    dictionary.add( key, foo );
    strictEqual( dictionary.getValue( key ), foo, 'should be strictly equal' );
})