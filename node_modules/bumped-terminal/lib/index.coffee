'use strict'

spawn = require 'execspawn'
stripEof = require 'strip-eof'

keywords =
  '$newVersion':
    regex: /\$newVersion/g
    replace: '_version'

  '$oldVersion':
    regex: /\$oldVersion/g
    replace: '_oldVersion'

replaceAll = (str, bumped, key) ->
  str.replace keywords[key].regex, bumped[keywords[key].replace]

module.exports = (bumped, plugin, cb) ->
  log = (type, data) -> plugin.logger[type] stripEof data.toString()
  plugin.command = replaceAll plugin.command, bumped, key for key of keywords

  error = false
  errorMessage = null

  cmd = spawn plugin.command, plugin.options

  cmd.stdout.on 'data', (data) -> log 'success', data

  cmd.stderr.on 'data', (data) -> log 'error', data

  cmd.on 'error', (err) ->
    error = true
    errorMessage = err.message or err

  cmd.on 'exit', (code) ->
    return cb() unless error or code
    errorMessage ?= "Process exited with code #{code}"
    log 'error', errorMessage
    cb true
