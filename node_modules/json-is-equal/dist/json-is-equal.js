/**
 * json-is-equal - Compare two JSON and return the result
 * @version v0.0.0
 * @link    https://github.com/Kikobeats/json-is-equal
 * @license MIT
 */require=function r(n,e,t){function u(o,f){if(!e[o]){if(!n[o]){var c="function"==typeof require&&require;if(!f&&c)return c(o,!0);if(i)return i(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var a=e[o]={exports:{}};n[o][0].call(a.exports,function(r){var e=n[o][1][r];return u(e?e:r)},a,a.exports,r,n,e,t)}return e[o].exports}for(var i="function"==typeof require&&require,o=0;o<t.length;o++)u(t[o]);return u}({"json-is-equal":[function(r,n){"use strict";var e=function(r){return"string"!=typeof r?r:JSON.parse(r)},t=function(r){return JSON.stringify(r,null,2)},u=function(r){return t(e(r))};n.exports=function(r,n){return u(r)===u(n)}},{}]},{},[]);