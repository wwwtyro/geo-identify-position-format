# geo-identify-position-format

Identifies a few common geometry position formats:

* Flat arrays `[1,2,3,4,5,6]`
* Array of arrays `[[1,2,3], [4,5,6]]`
* Array of TypedArrays `[new Float32Array([1,2,3]), new Float32Array([4,5,6])]`
* TypedArray `new Float32Array([1,2,3,4,5,6])`
* [ndarray](https://www.npmjs.com/package/ndarray) `ndarray(new Float32Array([1,2,3,4,5,6]))`

## Install

```sh
npm install geo-identify-position-format
```

## Use
```js
> var geoid = require('geo-identify-position-format');

> console.log(geoid.identify([1,2,3,4,5,6]) === geoid.FLAT_ARRAY);
true

> console.log(geoid.identify([[1,2,3],[4,5,6]]) === geoid.ARRAY_OF_ARRAYS);
true

> console.log(geoid.identify([new Float32Array([1,2,3]), new Float32Array([4,5,6])])
>     === geoid.ARRAY_OF_TYPED_ARRAYS);
true

> console.log(geoid.identify(new Float32Array([1,2,3,4,5,6])) === geoid.TYPED_ARRAY);
true

> console.log(geoid.identify(ndarray(new Float32Array([1,2,3,4,5,6]))) === geoid.NDARRAY);
true

> try {
>     geoid.identify('not an array');
> } catch(e) {
>     console.log('geo-identify-position-format throws an error when it cannot identify the format.');
> }
geo-identify-position-format throws an error when it cannot identify the format.
```

## Credits

Extracted from [@hughsk](https://twitter.com/hughskennedy)'s [gl-geometry](https://github.com/hughsk/gl-geometry).
