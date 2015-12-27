'use strict';

var ista = require('is-typedarray')
var isnd = require('isndarray')

var ARRAY_OF_ARRAYS = 'array of arrays';
var ARRAY_OF_TYPED_ARRAYS = 'array of typed arrays';
var FLAT_ARRAY = 'flat array';
var TYPED_ARRAY = 'typed array';
var NDARRAY = 'ndarray';

module.exports = {
    identify: identify,
    ARRAY_OF_ARRAYS: ARRAY_OF_ARRAYS,
    ARRAY_OF_TYPED_ARRAYS: ARRAY_OF_TYPED_ARRAYS,
    FLAT_ARRAY: FLAT_ARRAY,
    TYPED_ARRAY: TYPED_ARRAY,
    NDARRAY: NDARRAY
};

function identify(positions) {

    // Array of Arrays
    if (Array.isArray(positions) && Array.isArray(positions[0])) {
        return ARRAY_OF_ARRAYS;
    }

    // Array of TypedArrays
    if (Array.isArray(positions) && ista(positions[0])) {
        return ARRAY_OF_TYPED_ARRAYS;
    }

    // Flat Array
    if (Array.isArray(positions)) {
        return FLAT_ARRAY;
    }

    // ndarray
    if (isnd(positions)) {
        return NDARRAY;
    }

    // TypedArray
    if (ista(positions)) {
        return TYPED_ARRAY;
    }

    throw new Error('geo-identify-position-format: Could not identify position format.')
}
