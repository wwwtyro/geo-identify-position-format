'use strict';

var ndarray = require('ndarray');
var geoid = require('./index.js');

exports.testFlatArray = function(test) {
    test.expect(1);
    var flat = [1,2,3,4,5,6];
    test.equal(geoid.identify(flat), geoid.FLAT_ARRAY);
    test.done();
};

exports.testArrayOfArrays = function(test) {
    test.expect(1);
    var aoa = [[1,2,3],[4,5,6]];
    test.equal(geoid.identify(aoa), geoid.ARRAY_OF_ARRAYS);
    test.done();
}

exports.testArrayOfTypedArrays = function(test) {
    test.expect(1);
    var aoa = [new Float32Array(1,2,3), new Float32Array(4,5,6)];
    test.equal(geoid.identify(aoa), geoid.ARRAY_OF_TYPED_ARRAYS);
    test.done();
}

exports.testTypedArray = function(test) {
    test.expect(1);
    var typed = new Float32Array(1,2,3,4,5,6);
    test.equal(geoid.identify(typed), geoid.TYPED_ARRAY);
    test.done();
}

exports.testNDArray = function(test) {
    test.expect(1);
    var nda = ndarray(new Float32Array(1,2,3,4,5,6));
    test.equal(geoid.identify(nda), geoid.NDARRAY);
    test.done();
}

exports.testError = function(test) {
    test.expect(2);
    var notAnyKindOfFormat = 'Hello World!';
    test.throws(function() {
        geoid.identify(notAnyKindOfFormat);
    });
    try {
        geoid.identify(notAnyKindOfFormat);
    } catch (e) {
        test.equals(e.toString(), 'Error: geo-identify-position-format: Could not identify position format.')
    }
    test.done();
}
