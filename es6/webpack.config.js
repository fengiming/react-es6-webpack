/**
 * Created by Administrator on 2016/8/11.
 */
var path = require('path') ;
var webpack = require('webpack');
var RenamePlugin = require('./plugin/rename.plugin.js');
module.exports = {
    devtool:'source-map',// 该参数对开发很有帮助
    /*externals: {
        'react': 'React',
        'react-dom':'ReactDOM',
        'react-router':'ReactRouter'
    },*/
    buildTemplatePath:path.resolve(__dirname,'build/index.html'),
    entry: {
        vendor: ["jquery", "react",'react-dom','react-router'],
        app:[
            //'webpack-dev-server/client?http://localhost:8080/',
            //'webpack/hot/dev-server',
            './app/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),// 要求是绝对地址
        publicPath: '/assets/',
        // 以文件内容MD5值作为文件名后缀，可以避免缓存导致的问题
        filename: 'app-[hash:6].js'
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
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            // (Give the chunk a different name)
            minChunks: Infinity
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
       // new RenamePlugin()
    ]
};
