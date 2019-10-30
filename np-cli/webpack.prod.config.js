const merge= require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
    mode: 'production',
    module: {
       rules: [
        {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '_[name]_[local]-[hash:base64:5]'
                    }
                },
                'postcss-loader',
                'less-loader'
            ],
            exclude: /node_modules/
        }
       ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                      comments: false,
                    },
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log']
                    }
                  },
                  extractComments: false,
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions:{
                    safe:true,
                    autoprefixer: {disable:true},
                    mergeLonghand: false,
                    discardComments:{removeAll:true}
                }
              }),
        ]
    }
}

module.exports = merge(baseConfig,prodConfig);