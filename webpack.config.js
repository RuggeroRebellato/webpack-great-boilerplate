const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	entry: {
		polyfill: 'babel-polyfill',
		app: './src/js/index.js'
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['env']
					}
				}
			},

			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								config: {
									path: './postcss.config.js'
								}
							}
						},
						'sass-loader'
					]
				})
			},
			{
				test: /\.(png|jpg|gif|svg|mp4)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[path][name].[ext]?hash=[hash:20]',
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin({ filename: 'styles.css' }),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: true
		})
	]
}
