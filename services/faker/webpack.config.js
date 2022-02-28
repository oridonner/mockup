/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const isDev = process.env.NODE_ENV !== 'production';
const buildPath = path.join(__dirname, 'dist');

console.log('=============================================================');
console.log(
  isDev
    ? '    Building dist folder with development webpack config'
    : '       ⚠️  ⚠️  ⚠️     Production Build!   ⚠️  ⚠️  ⚠️'
);
console.log('=============================================================');

module.exports = {
  entry: path.join(__dirname, '/src/server.ts'),
  mode: isDev ? 'development' : 'production',
  devtool: 'inline-source-map',
  target: 'node',
  output: {
    path: buildPath,
    filename: 'bundle.min.js',
  },
  resolve: {
    extensions: ['.ts', 'js'], //resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [/node_modules/, /logs/],
      },
    ],
  },

  externals: [nodeExternals()],
};
