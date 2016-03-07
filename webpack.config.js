var path = require('path');
var webpack = require('webpack');
module.exports = {
	context: path.resolve('src'),
	entry: ["./app"],
	output: {
		path: path.resolve('dist/scripts/'),
		publicPath: 'scripts/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'dist'
	},

  module: {
		loaders: [
	    {
	      test: /\.(jsx|js)?$/,
	      exclude: /node_modules/,
	      loader: 'babel',
	      query: {
	        presets: ['react', 'es2015']
	      }
	    }
	  ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
