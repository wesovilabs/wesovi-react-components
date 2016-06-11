process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

var path = require('path');
var argv = require('yargs').argv;

var config = {};

config.cache = false;
config.dir_src =  'src';
config.dir_dist = 'dist';

config.webpack_host =  'localhost';
config.webpack_port = process.env.PORT || 3000;

config.vendor_dependencies = [
  'react',
  'react-redux',
  'redux',
  'redux-devtools'
];

config.path_project = path.resolve(__dirname, '../');

const paths = (() => {
  const base    = [config.path_project],
    resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.dir_src),
    dist    : project.bind(null, config.dir_dist)
  };
})()
