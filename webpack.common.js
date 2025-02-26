const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'web-components.js',
    library: 'MyWebComponents',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};