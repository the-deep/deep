var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');


module.exports = {
    context: __dirname,

    entry: './frontend/index',

    output: {
        path: path.resolve('./bundles/'),
        filename: '[name]-[hash].js',
    },

    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' }),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true,
        }),
        new CleanObsoleteChunks(),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /nodemodules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react'],
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
                        'ruby-sass-loader',
                    ],
                }),
            },
        ],
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
