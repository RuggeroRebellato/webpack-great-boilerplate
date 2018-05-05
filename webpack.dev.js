const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	mode: 'development',
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
						cacheDirectory: false,
						presets: ['env']
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: './postcss.config.js'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: true,
							sourceMapContents: true
						}
					}
				]
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
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: true
		})
	]
}
