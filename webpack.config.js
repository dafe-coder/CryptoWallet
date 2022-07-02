const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: {
		popup: path.resolve('src/index.js'),
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										targets: 'defaults',
									},
								],
								'@babel/preset-react',
							],
						},
					},
				],
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/i,
			},
			{
				type: 'asset/resource',
				test: /\.(jpg|jpeg|png|woff|woff2|ttf|svg)$/,
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve('src/manifest.json'),
					to: path.resolve('dist'),
				},
				{
					from: path.resolve('src/static'),
					to: path.resolve('dist'),
				},
			],
		}),
		new HtmlPlugin({
			title: 'Crypto Wallet',
			filename: 'popup.html',
			chunks: ['popup'],
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
	},
}
