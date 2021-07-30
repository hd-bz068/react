const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[hash].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: './src/public/index.html'
        })
    ]
}