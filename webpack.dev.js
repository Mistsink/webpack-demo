const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: '[name].js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin()
    ]
  };