const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'my-web-components.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyWebComponents',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
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
};