const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

function getPath(filename) {
  return path.resolve(process.cwd(), filename)
}

function getConfig({ tsConfig, rules = [], ...rest }) {
  const lintLoaders = [
    {
      loader: 'tslint-loader',
      options: {
        configFile: getPath('config/tslint.yaml'),
        typeCheck: true
      }
    }
  ]

  const tsLoaders = [
    {
      loader: 'ts-loader',
      options: {
        context: process.cwd(),
        configFile: tsConfig
      }
    }
  ]

  const cssLoaders = ['style-loader', 'css-loader', 'postcss-loader']

  const decssLoaders = [
    'style-loader',
    'decss-loader/react',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[local]-[hash:base64:5]'
      }
    },
    'postcss-loader'
  ]

  const fileLoaders = ['file-loader']

  return {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: lintLoaders
        },

        {
          test: /\.tsx?$/,
          use: tsLoaders,
          exclude: /node_modules/
        },

        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /raw/, // foobar.css?raw
              use: cssLoaders
            },
            { use: decssLoaders }
          ]
        },

        {
          test: /\.(png|jpg|gif|svg)$/,
          use: fileLoaders
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
