var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
			{
                test: /\.(css|scss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				enforce: 'pre', 	// Добавить в качестве preLoadera auto-prefixer для стилей
				test: /\.(css|scss)$/,
				exclude: /(node_modules)/,
				loader: 'postcss-loader'
			},
			{
				test: /\.js$/,		// Добавить babel-loader
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
				}
			},
			{
				enforce: 'pre',		// Добавить в качестве preLoadera linter для кода
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'eslint-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,		// Добавить loader для картинок.
				use: [
				{
					loader: 'url-loader',
					options: {
					limit: 8192
					}
				}
				]
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({		// Добавить и настроить UglifyJSPlugin
		output: {
			comments: false,
			beautify: false		// Включить uglification
		},
		minimize: true,		// Включить minification
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline: true,
		port: 8081
	}
}