const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dist = '../dist/';

module.exports = {
    entry: {
        'main': './assets/js/pages/main.js'
    },

    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, dist)
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: './css/styles.css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "./js/commons.js",
        })
    ],

    stats: {
        children: false,
        chunks: false,
        modules: false
    }
};