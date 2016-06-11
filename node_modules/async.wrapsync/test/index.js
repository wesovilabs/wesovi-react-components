'use strict'

require('should')

var wrapAsync = require('..')
var PinkyPromise = require('pinkie-promise')

var resolvePromise = function (argument) {
  return new PinkyPromise(function (resolve) {
    setImmediate(function () {
      resolve(argument + ' resolved')
    })
  })
}

var rejectPromise = function (argument) {
  return new Promise(function (resolve, reject) {
    setImmediate(function () {
      reject(argument + ' rejected')
    })
  })
}

describe('wrapAsync ::', function () {
  it('simple wrap', function (done) {
    var parse = wrapAsync(JSON.parse)
    parse('{"a":1}', function (err, result) {
      result.a.should.be.equal(1)
      done(err)
    })
  })

  it('wrap null', function (done) {
    var parse = wrapAsync(function () {
      return null
    })

    parse('{"a":1}', function (err, result) {
      (!result).should.be.equal(true)
      done(err)
    })
  })

  it('wrap variable number of arguments', function (done) {
    wrapAsync(function (x, y, z) {
      (arguments.length === 3).should.be.equal(true)
      ;(x === 1).should.be.equal(true)
      ;(y === 2).should.be.equal(true)
      ;(z === 3).should.be.equal(true)
    })(1, 2, 3, function () {})
    done()
  })

  it('catch errors', function (done) {
    wrapAsync(function () {
      throw new Error('foo')
    })(function (err) {
      (!!err).should.be.equal(true)
      ;(err.message === 'foo').should.be.equal(true)
      done()
    })
  })

  it('dont catch errors in the callback', function (done) {
    try {
      wrapAsync(function () {})(function (err) {
        if (err) return test.done(new Error('should not get an error here'))
        throw new Error('callback error')
      })
    } catch (e) {
      (e.message === 'callback error').should.be.equal(true)
      done()
    }
  })

  describe('standard promises support', function () {
    [
      'native-promise-only',
      'bluebird',
      'es6-promise',
      'rsvp'
    ].reduce(function (promises, name) {
      var Promise = require(name)
      if (typeof Promise.Promise === 'function') {
        Promise = Promise.Promise
      }

      promises[name] = {
        resolve: function (test) {
          var promisified = function (argument) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(argument + ' resolved')
              }, 15)
            })
          }
          wrapAsync(promisified)('argument', function (err, value) {
            if (err) {
              return test.done(new Error('should not get an error here'))
            }
            test.ok(value === 'argument resolved')
            test.done()
          })
        },

        reject: function (test) {
          var promisified = function (argument) {
            return new Promise(function (resolve, reject) {
              reject(argument + ' rejected')
            })
          }
          wrapAsync(promisified)('argument', function (err) {
            test.ok(err)
            test.ok(err.message === 'argument rejected')
            test.done()
          })
        }
      }
      return promises

    }, {})

    // it('resolve', function(done) {
    //   wrapAsync(resolvePromise)('argument', function(err, value) {
    //     (!err).should.be.equal(true)
    //     (value === 'argument resolved').should.be.equal(true)
    //     done()
    //   })
    // })

  // it('reject', function(done) {
  //   wrapAsync(promisified)('argument', function(err) {
  //     (!!err).should.be.equal(true)
  //     (err.message === 'argument rejected').should.be.equal(true)
  //     done()
  //   })
  // })
  })
})
