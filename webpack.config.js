'use strict';

const path = require('path');

let config = {
    // context: path.resolve(__dirname, 'src'),
    // entry: './index.js',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react'] //'stage-0',
                }
            }
        ]
    }
}

module.exports = config;
