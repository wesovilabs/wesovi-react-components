isEqual = require '..'
should  = require 'should'

describe 'json is equal ::', ->

  it 'different', ->
    objt1 = hello: 'world', foo:'bar'
    objt2 = foo:'bar', hello: 'world'
    isEqual(objt1, objt2).should.be.equal false

  it 'equal', ->
    objt1 = foo:'bar', hello: 'world'
    objt2 = foo:'bar', hello: 'world'
    isEqual(objt1, objt2).should.be.equal true
