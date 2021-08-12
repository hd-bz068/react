const path = require('path');
const common = require('./webpack.config')
const {merge}  = require('webpack-merge')

module.exports = merge(common, {
    mode: "development",
    output:{
        path: path.resolve(__dirname, '/build'),
        filename: 'main.[contenthash].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"]
            },
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true,
        port: 3000
    },
})