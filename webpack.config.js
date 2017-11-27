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
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'] //'stage-0',
                }
            }
        ]
    }
};


if (process.env.BUILD_TARGET === 'dev') {
    object.assign(config, {
        entry: [
            './src/index.js',
            'webpack-dev-server/client?http://localhost:3000', // webpackDevServer host adn port
            'webpack/hot/only-dev-server' // only prevents reload on syntax errors
        ],
        output: {
            path: '/',
            filename: 'bundle.js'
        },
        devServer: {
            hot: true,
            filename: 'bundle.js',
            publicPath: '/',
            historyApiFallback: true,
            contentBase: './dist',
            proxy: {
                "*": "http://localhost:3333"
            }
        },
        devtool: 'source-map',
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [
                {test: /\.css$/, loader: 'style!css'},
                {
                    test: /\.js$/,
                    loaders: ['react-hot', 'babel?' + JSON.stringify({
                        cacheDirectory: true,
                        presets: ['stage-0', 'es2015', 'react']
                    })],
                    exclude: /node_modules/
                }
            ]
        }
    });
}
;

module.exports = config;
