# json-is-equal

[![Build Status](http://img.shields.io/travis/Kikobeats/json-is-equal/master.svg?style=flat)](https://travis-ci.org/Kikobeats/json-is-equal)
[![Dependency status](http://img.shields.io/david/Kikobeats/json-is-equal.svg?style=flat)](https://david-dm.org/Kikobeats/json-is-equal)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/json-is-equal.svg?style=flat)](https://david-dm.org/Kikobeats/json-is-equal#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/json-is-equal.svg?style=flat)](https://www.npmjs.org/package/json-is-equal)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Compare two JSON and return the result

Because JSON is represented in **J**ava**S**cript **O**bject **N**otation, but isn't not the same. While in an object the order of the keys is not important, in a JSON is important.

## Install

```bash
npm install json-is-equal
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install json-is-equal --save
```

and later link in your HTML:

```html
<script src="bower_components/json-is-equal/dist/json-is-equal.js"></script>
```

## Usage

```js
var isEqual = require('json-is-equal');
var objt1 = {
  foo: 'bar',
  hello: 'world'
};
var objt2 = {
  hello: 'world',
  foo: 'bar'
};
console.log(isEqual(objt1, objt2));
// => false
```


## License

MIT © [Kiko Beats](http://www.kikobeats.com)


