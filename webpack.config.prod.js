var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/client.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'client.[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=assets/images/[hash:base58:8].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
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
    postcss: function () {
        return [
            require('autoprefixer')(
                {
                    browsers: ['last 2 versions']
                }
            ),
            require('postcss-nested'),
            require('postcss-simple-vars'),
        ];
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Pekkis Goes To Movies',
            template: 'web/index.prod.html',
            favicon: 'web/favicon.png',
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
};
