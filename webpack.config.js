const path                = require('path')
const webpack             = require('webpack')
const extractTextPlugin   = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname),
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: './public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.css', '.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?importLoaders=1!postcss-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
}
