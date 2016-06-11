# async.wrapsync

![Last version](https://img.shields.io/github/tag/Kikobeats/async.wrapsync.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/async.wrapsync/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/async.wrapsync)
[![Dependency status](http://img.shields.io/david/Kikobeats/async.wrapsync.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.wrapsync)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/async.wrapsync.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.wrapsync#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/async.wrapsync.svg?style=flat-square)](https://www.npmjs.org/package/async.wrapsync)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> Take a sync function and make it async, passing its return value to a callback. Based on [async#asyncify](https://github.com/caolan/async#asyncifyfunc) as module.

## Install

```bash
npm install async.wrapsync --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install async.wrapsync --save
```

and later link in your HTML:

```html
<script src="bower_components/async.wrapsync/dist/async.wrapsync.js"></script>
```

## Usage

```js
var wrapSync = require('async.wrapsync');

var parse = wrapSync(JSON.parse);

parse('{\"foo\":bar}', function(err, result) {
  // data is the result of parsing the text.
  // If there was a parsing error, it would have been caught.
});
```

## API

### wrapSync(fn)

Take a sync function and make it async, passing its return value to a callback. This is useful for plugging sync functions into a waterfall, series, or other async functions. Any arguments passed to the generated function will be passed to the wrapped function (except for the final callback argument). Errors thrown will be passed to the callback

__Arguments__

* `fn` - a sync function.

## License

MIT © [Kiko Beats](http://kikobeats.com)
