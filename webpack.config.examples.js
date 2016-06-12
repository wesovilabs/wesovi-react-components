const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



;

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: './examples/App.js',
  output: {
    path: path.join(__dirname, 'examples/build'),
    filename: 'wesovi.react.components.example.js',
    publicPath: '/examples/build/'
  },
  resolve: {
    extensions: ['', '.scss', '.js', 'jsx','.json']
  },
  module: {

    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: [/(node_modules)/]
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('spec.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};
