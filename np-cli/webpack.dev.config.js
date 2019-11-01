const merge= require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
  watch:true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000, 
    aggregateTimeout: 300 
  },
  module:{
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '_[name]_[local]-[hash:base64:5]'
              },
            }
          },
          'postcss-loader',
          'less-loader'
        ],
        exclude:/node_modules/
      }
    ]
  },
  devtool:'source-map'
}
module.exports = merge(baseConfig,devConfig);