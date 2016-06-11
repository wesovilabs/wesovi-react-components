const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './test/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'spec.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.scss', '.js', '.json'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: [/(node_modules)/]
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
      }
    ]
  },
  postcss: [autoprefixer],
  eslint: {
    configFile: paths.project('.eslintrc')
  },
  plugins: [
    new ExtractTextPlugin('spec.css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};
