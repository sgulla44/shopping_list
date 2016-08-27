var path = require('path');
var webpack = require('webpack');

const validate = require('webpack-validator')





module.exports = validate({
  context: path.join(__dirname, "src"),
  
  
  entry: "./js/client.js",
  
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']

          }
        }, 
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]__[has:base64:5]'
          }
        }
    ],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
});
