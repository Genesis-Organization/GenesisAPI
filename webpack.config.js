const path = require('path');
const nodeExternals = require('webpack-node-externals')

let mode = process.env.MODE
let node_env = 'none'
if (mode == 'DEV') node_env = 'development'
if (mode == 'PROD') node_env = 'production'

module.exports = {
  target: 'node',
  mode: node_env,
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '>>': path.resolve(__dirname, 'tests/'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [ nodeExternals() ]
}
