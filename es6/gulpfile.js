/**
 * Created by Administrator on 2016/8/11.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('./webpack.config.js');
var build = './build';
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
    webpack(config, function (err, stats) {
        if (err) throw new gulpUtil.PluginError("webpack", err);
        callback();
    });
});

gulp.task('webpackDevServer', function () {
    // Start a webpack-dev-server
    var compiler = webpack(config);
    new WebpackDevServer(compiler, {
        contentBase:'build',
        hot: true
    }).listen(8080, "localhost", function (err) {
            if (err) throw new gulpUtil.PluginError("webpack-dev-server", err);
            // Server listening
            gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        });
});