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
	        presets: ['react', 'stage-0', 'es2015']
	      }
	    },
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: "url-loader?limit=10000"
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
	  ]
  },

  resolve: {
    extensions: ['', 'jsx', '.js', '.es6'],
		alias: {
      '$': 'jquery',
      'jQuery': 'jquery'
    }
  }
}
