'use strict';

var objectify = function(objt) {
  if (typeof objt !== 'string') {
    return objt;
  }
  return JSON.parse(objt);
};

var stringify = function(objt) {
  return JSON.stringify(objt, null, 2);
};

var normalize = function(objt) {
  return stringify(objectify(objt));
};

module.exports = function(objt1, objt2) {
  return normalize(objt1) === normalize(objt2);
};
