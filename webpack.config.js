var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  resolve: {
    modules: [
      "node_modules",
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  mode: 'development',
  resolve: {
    modules: [
      "node_modules",
    ],
  },
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
