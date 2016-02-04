'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
const merge = require('merge');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

const ENV = process.env.NODE_ENV;
const PATHS = {
    src: path.resolve('./src'),
    build: path.resolve('./dist'),
    modules: path.resolve('./node_modules'),
    test: path.resolve('./test')
};

let webpack_isomorphic_tools_plugin;
webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic'));
if (ENV === 'DEVELOPMENT') {
    webpack_isomorphic_tools_plugin = webpack_isomorphic_tools_plugin.development();
}

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pkg = require('./package.json');

function getStyleLoader(env, ret, loaders)
{
    let loader;
    if (env !== 'prod') {
        loaders.unshift('style-loader');
        ret.loaders = loaders;
    } else {
        ret.loader = ExtractTextPlugin.extract(
            'style-loader',
            loaders
        );
    }

    return ret;
}


const common = {

    context: __dirname,

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    PATHS.modules,
                ]
            },
            getStyleLoader(
                ENV,
                {
                   test: /\.p?css$/,
                    include: [
                        PATHS.src,
                    ]
                },
                [
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            ),
            getStyleLoader(
                ENV,
                {
                    test: /\.css$/,
                    include: [
                        PATHS.modules,
                    ]
                },
                [
                    'css-loader'
                ]
            ),
            {
                test: webpack_isomorphic_tools_plugin.regular_expression('images'),
                loaders: [
                    'file?hash=sha512&digest=hex&name=assets/images/[hash:base58:8].[ext]',
                    'img?minimize&optimizationLevel=5&progressive=true'
                ],
                include: [
                    PATHS.src
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
                include: [
                    PATHS.src,
                    PATHS.modules
                ]
            },
            {
                test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]',
                include: [
                    PATHS.src,
                    PATHS.modules
                ]
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        root: [
            PATHS.src,
        ],
        extensions: ['', '.js', '.jsx']
    }
};

const envs = {

    test: {
      devtool: 'inline-source-map' //just do inline source maps instead of the default
    },

    development: {
        devtool: 'cheap-module-source-map',
        entry: [
            'webpack-hot-middleware/client',
            './src/client.js'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: 'client.[hash].js'
        },
        plugins: [
            webpack_isomorphic_tools_plugin,
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),

            new HtmlWebpackPlugin({
                title: 'JavaScript SchamaScript',
                template: 'web/index.html',
                favicon: 'web/favicon.ico',
                inject: 'body'
            }),
            new webpack.DefinePlugin({
                __DEVELOPMENT__: process.env.NODE_ENV === 'development',
                __DEVTOOLS__: false
            }),

        ]
    },
    prod: {
        devtool: 'source-map',
        entry: {
            client: './src/client.js',
            vendor: Object.keys(pkg.dependencies)
        },

        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].[chunkhash].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin(
                'vendor',
                '[name].[chunkhash].js'
            ),
            webpack_isomorphic_tools_plugin,
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin("styles.[contenthash].css"),
            new HtmlWebpackPlugin({
                title: 'Pekkis Goes To Movies',
                template: 'web/index.html',
                favicon: 'web/favicon.ico',
                inject: 'body',
            }),
            new webpack.optimize.UglifyJsPlugin({
                'mangle': false,
                'compress': {
                    /* eslint-disable camelcase */
                    dead_code: true,  // discard unreachable code
                    unsafe: false, // some unsafe optimizations (see below)
                    unused: false, // drop unused variables/functions
                    hoist_vars: false, // hoist variable declarations
                    side_effects: false, // drop side-effect-free statements
                    global_defs: {} // glob
                    /* eslint-enable camelcase */
                }
            }),
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                __DEVELOPMENT__: process.env.NODE_ENV === 'development',
                __DEVTOOLS__: false
            }),
        ]
    }
}

module.exports = merge(common, envs[ENV]);
