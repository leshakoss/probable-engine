const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

function getPath(filename) {
  return path.resolve(process.cwd(), filename)
}

function getConfig({ tsConfig, rules = [], ...rest }) {
  return {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                context: process.cwd(),
                configFile: tsConfig
              }
            }
          ],
          exclude: /node_modules/
        },
        ...rules
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin({ configFile: tsConfig })]
    },
    ...rest
  }
}

module.exports = {
  getPath,
  getConfig
}
