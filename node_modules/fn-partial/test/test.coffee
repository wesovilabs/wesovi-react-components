## -- Dependencies -------------------------------------------------------------

fn_partial = require '..'
should     = require 'should'

## -- Tests --------------------------------------------------------------------

describe 'fn-partial ::', ->

  before  ->
    @get = (name) ->
      objt =
        foo: 'bar'
      objt[name]

    @sayHello = ->
      'hello world!'

  it 'call the function without parameters', ->
    result = fn_partial(@sayHello)
    result().should.eql 'hello world!'

  it 'call the function with paramters', ->
    result = fn_partial(@get, 'foo')
    result().should.eql 'bar'
