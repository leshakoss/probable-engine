const { getPath, getConfig } = require('./utils/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = getConfig({
  tsConfig: getPath('config/tsconfig.client.json'),
  entry: getPath('src/client/index.tsx'),
  output: {
    filename: 'script.js',
    path: getPath('dist/static')
  },
  target: 'web',

  devServer: {
    port: 1337,
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: getPath('src/server/template.ejs')
    }),
    new HotModuleReplacementPlugin()
  ]
})
