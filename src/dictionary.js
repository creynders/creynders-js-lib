//namespace
var creynders = creynders || {};

/**
 * The Dictionary class lets you create a dynamic collection of properties, which uses strict equality (===) for key comparison.
 * @class creynders.Dictionary
 * @constructor
 */
creynders.Dictionary = function(){

	this.fqn = 'creynders.Dictionary';

	/**
	 * @private
	 */
	this._list = [];

};//creynders.Dictionary

creynders.Dictionary.prototype = {
	/**
	 * @private
	 * @param key
	 * @return index
	 */
	_getIndexByKey : function( key ){
		for( var i = 0, n = this._list.length ; i < n ; i++ ){
			if( this._list[ i ].key === key )
                return i;
		}

		return -1;
	},

	/**
	 * Maps <code>value</code> to <code>key</code>
	 * @param {Object} key
	 * @param {Object} value
	 * @return {creynders.Dictionary} the Dictionary instance
	 */
	add : function( key, value ){
		var index = this._getIndexByKey( key );
        index  = ( index < 0 ) ? this._list.length : index;
        this._list[ index ] = {
            key : key,
            value : value
        }
		return this;
	},

	/**
	 * removes the mapping of the value of <code>key</code>
	 * @param {Object} key
	 * @return {Object} the value mapped to <code>key</code>
	 */
	remove : function( key ){
		var index = this._getIndexByKey( key );
		if( index >= 0 ) return this._list.splice( index, 1 ).value;

		return undefined;
	},

	/**
	 * retrieves the value mapped to <code>key</code>
	 * @param {Object} key
	 * @return {Object} the value mapped to <code>key</code>
	 */
	getValue : function( key ){
		var index = this._getIndexByKey( key );
		if( index >= 0 ) return this._list[ index ].value;

		return undefined;
	},

	/**
	 * checks whether a value has been mapped to <code>key</code>
	 * @param {Object} key
	 * @return {Boolean}
	 */
	hasValue : function( key ){
		var index = this._getIndexByKey( key );
		return ( index >= 0 );
	}

};//creynders.Dictionary.prototype