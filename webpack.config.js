const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    day01: ['./src/day01/'],
    day02: './src/day02/'
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'node'
}
