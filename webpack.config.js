let path                    = require('path');
let HtmlWebpackPlugin       = require('html-webpack-plugin');
let MiniCssExtractPlugin    = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        main: './src/main.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [
            '.css', '.sass', '.ts', '.tsx', '.js', '.jsx'
        ]
    },
    devServer: {
        contentBase: './dist'
    }
}