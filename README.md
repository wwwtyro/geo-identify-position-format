# geo-identify-position-format

Identifies a few common geometry position formats.

## Install

```sh
npm install geo-identify-position-format
```

## Use
```js
var geoid = require('geo-identify-position-format');
```

#### `geoid.identify(positions)`

returns one of:

* `geoid.FLAT_ARRAY`
* `geoid.ARRAY_OF_ARRAYS`
* `geoid.TYPED_ARRAY`
* `geoid.ARRAY_OF_TYPED_ARRAYS`
* `geoid.NDARRAY`

when `positions` has one of the following formats:

* Flat arrays `[1,2,3,4,5,6]`
* Array of arrays `[[1,2,3], [4,5,6]]`
* Array of TypedArrays `[new Float32Array([1,2,3]), new Float32Array([4,5,6])]`
* TypedArray `new Float32Array([1,2,3,4,5,6])`
* [ndarray](https://www.npmjs.com/package/ndarray) `ndarray(new Float32Array([1,2,3,4,5,6]))`

If `positions` does not have one of the previously listed formats, `geoid.identify`
will throw an error.

## Credits

Extracted from [@hughsk](https://twitter.com/hughskennedy)'s [gl-geometry](https://github.com/hughsk/gl-geometry).
