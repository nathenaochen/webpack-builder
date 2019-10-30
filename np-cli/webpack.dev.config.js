const merge= require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
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
              modules: true,
              localIdentName: '_[name]_[local]-[hash:base64:5]'
            }
          }
        ],
        exclude:/node_modules/
      }
    ]
  },
  devtool:'source-map'
}
module.exports = merge(baseConfig,devConfig);