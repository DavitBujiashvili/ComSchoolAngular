var path = require('path');
var htmlWebpackPlugin = require("html-webpack-plugin"); // we added this

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [ // we added this
    new htmlWebpackPlugin({
      template: './src/index.html', // path and .html from Step 3
      inject: true,
    }),
  ],
  module: {
    rules: [ // we added this
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};