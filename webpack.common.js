const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		popup: path.resolve('src/index.js'),
		contentScript: path.resolve('src/contentScript/contentScript.js'),
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
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
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
		...getHtmlPlugins(['popup']),
	],
	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
	},
}

function getHtmlPlugins(chunks) {
	return chunks.map(
		(chunk) =>
			new HtmlPlugin({
				title: 'Crypto Wallet',
				filename: `${chunk}.html`,
				chunks: [chunk],
			})
	)
}
