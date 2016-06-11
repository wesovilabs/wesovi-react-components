module.exports = (CONST) ->
  types:
    debug:
      level : 4
      color : 'blue'
      symbol: CONST.FIGURE.info

    info:
      level : 3
      color : 'white'
      symbol: CONST.FIGURE.info

    success:
      level : 2
      color : 'green'
      symbol: CONST.FIGURE.success

    warn:
      level : 1
      color : 'yellow'
      symbol: CONST.FIGURE.warning

    error:
      level : 0
      color : 'red'
      symbol: CONST.FIGURE.error
