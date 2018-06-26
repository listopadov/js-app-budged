const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const chalk = require('chalk');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',

    watch: true,

    watchOptions: {
        aggregateTimeout: 300
    },

    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.red.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        })
    ]
});