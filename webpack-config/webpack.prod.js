const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path');
const common = require('./webpack.config')
const {merge}  = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output:{
        path: path.join(__dirname, '../build'),
        filename: 'main.[contenthash].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
            },
        ]
    },
    optimization:{
        minimizer: [new OptimizeCssAssetsPlugin(),
        new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin()
    ]
})