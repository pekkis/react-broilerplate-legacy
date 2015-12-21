var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const ENV = process.env.NODE_ENV;
const merge = require('merge');

const common = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader?browsers=last 2 version',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=assets/images/[hash:base58:8].[ext]',
                    'img?minimize&optimizationLevel=5&progressive=true'
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    }
};

const envs = {
    development: {
        devtool: 'cheap-module-source-map',
        entry: [
            'webpack-hot-middleware/client',
            './src/client.js'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: 'client.js'
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),

            new HtmlWebpackPlugin({
                title: 'JavaScript SchamaScript',
                template: 'web/index.dev.html',
                favicon: 'web/favicon.ico'
            }),
            new webpack.DefinePlugin({
                __DEVELOPMENT__: process.env.NODE_ENV === 'development',
                __DEVTOOLS__: false
            }),
        ]
    },
    prod: {
        devtool: 'source-map',
        entry: [
            './src/client.js'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: 'client.[hash].js'
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new HtmlWebpackPlugin({
                title: 'Pekkis Goes To Movies',
                template: 'web/index.prod.html',
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
