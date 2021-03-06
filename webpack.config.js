/**
 * Created by yishuangxi on 2016/2/29.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackMd5Hash = require('webpack-md5-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    // devtool: 'source-map',
    entry: {
        'index': 'src/index/index.jsx',
        'about': 'src/about/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        preLoaders: [
            // {
            //     test: /\.jsx?$/, // include .js files
            //     exclude: /node_modules/, // exclude any and all files in the node_modules folder
            //     loader: "jshint-loader"
            // }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!postcss-loader")
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }
        ]
    },
    resolve: {
        root: __dirname,
        alias: {
            
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index page title',
            filename: 'index.html',
            template: './src/index/index.html',
            chunks:['index', 'common']
        }),
        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin("common", "common.[chunkhash:8].js"),
        new ExtractTextPlugin("[name].[contenthash:8].css")
    ],
    postcss: function () {
        return [precss, autoprefixer];
    },
    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,
        //
        //// custom reporter function
        //reporter: function(errors) { console.log(errors); }
    }
}