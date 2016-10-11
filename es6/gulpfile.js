/**
 * Created by Administrator on 2016/8/11.
 */
var webpack = require('webpack');
var fs = require('fs');
var WebpackDevServer = require('webpack-dev-server');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('./webpack.config.js');
var build = './build';
var bundleName = 'app' ;
// 拷贝文件
gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest(build));
});
// css压缩成一个文件
gulp.task('css', function (callback) {
    gulp.src('./app/css/*.css')
        .pipe(concat('app.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(build))
});

// webpack打包
gulp.task('webpack', function (callback) {
    var bundler = webpack(config);
    /* 替换对应的文件路径 */
    bundler.run(function (err, stats) {
        var assets = stats.toJson().assets;
        var name;
        console.info(assets);
        for (var i = 0; assets[i]; i++) {
            if (assets[i].name.indexOf(bundleName) === 0 && assets[i].name.indexOf('.map') < 0) {
                name = assets[i].name;
                break
            }
        }
        console.info('重新打包后的js文件名：' + name);
        fs.stat(config.buildTemplatePath, function (err, stats) {
            if (err) {
                return;
            }
            // 修改对应的HTML模板文件
            writeTemplate(name);
        })
    })
});

gulp.task('webpackDevServer', function () {
    // Start a webpack-dev-server
    var compiler = webpack(config);
    new WebpackDevServer(compiler, {
        contentBase: 'build',
        hot: true
    }).listen(8080, "localhost", function (err) {
            if (err) throw new gulpUtil.PluginError("webpack-dev-server", err);
            // Server listening
            gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        });
});

// 替换页面中的js引用路径
function writeTemplate(name, oldName) {
    var fstring, oldName = oldName || bundleName, targetStr, matchStr;
    var rscript = '<script\\s+.*(?:src=[\'\"][-\\w\\/]*(' + oldName + '[-\\w]*\\.js)[\'\"]).*>';
    fs.readFile(config.buildTemplatePath, function (err, data) {
        if (err) {
            return;
        }
        /* 若文件内容不为空 */
        if ((fstring = data.toString()).length > 0) {
            if (targetStr = (matchStr = fstring.match(new RegExp(rscript)) || [])[1]) {
                fstring = fstring.replace(targetStr, name);
                fs.writeFile(config.buildTemplatePath, fstring, function (err) {
                    if (err) {
                        console.info(err);
                    }
                });
            }
        }
    });
}