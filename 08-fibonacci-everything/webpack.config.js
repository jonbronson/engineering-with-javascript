const path = require('path');

let config = {
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
    ],
  },
};

module.exports = config;
