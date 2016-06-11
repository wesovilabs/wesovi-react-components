'use strict'

var sliced = require('sliced')
var exists = require('existential')
var defaults = require('lodash.defaults')

function isObject (arg) {
  return typeof arg === 'object' && arg !== null
}

function Resolve (fn) {
  function resolve (x, y) {
    return fn({}, x, y)
  }
  return resolve
}

function ResolveDefaults (defaultsFn) {
  function resolveDefaults (target, source) {
    if (!isObject(source)) return exists(target) ? target : source
    return defaultsFn(target, source)
  }
  return resolveDefaults
}

function ExistentialDefault (defaultsFn) {
  function existentialDefault () {
    var args = sliced(arguments)
    var result = defaultsFn(args.shift(), args.shift())
    while (args.length) result = defaultsFn(result, args.shift())
    return result
  }

  return existentialDefault
}

var resolve = ResolveDefaults(Resolve(defaults))
module.exports = ExistentialDefault(resolve)
