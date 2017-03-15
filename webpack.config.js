const path                    = require('path')
const webpack                 = require('webpack')
const ExtractTextPlugin       = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // context: path.resolve(__dirname),
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    // path: path.join(__dirname, './public/'),
    filename: path.join(__dirname, './public/bundle.js')
  },
  devServer: {
    contentBase: path.join(__dirname, '/')
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.resolve(__dirname, './public/bundle.css')),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ]
}
