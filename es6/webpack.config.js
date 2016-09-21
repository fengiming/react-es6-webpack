/**
 * Created by Administrator on 2016/8/11.
 */
var path = require('path') ;
var webpack = require('webpack');
module.exports = {
    devtool:'source-map',// 该参数对开发很有帮助
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
        './app/app.js'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.less$/,
                exclude: /baseLess/,
                loaders: ['css','less']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
