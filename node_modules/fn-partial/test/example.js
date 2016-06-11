var players = {
  one: 'Kiko',
  two: 'Ricard',
  three: 'Xavi'
};

var size = function(objt){
  return Object.keys(objt).length;
};

var numPlayers = size(players);
console.log(numPlayers); // 3
players.four = 'Ben';
console.log(numPlayers); // 3, expected 4
delete players.four;

var partial = require('fn-partial');

var numPlayers = partial(size, players);
console.log(numPlayers()); // 3
players.four = 'Ben';
console.log(numPlayers()); // 4
