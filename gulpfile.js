'use strict';

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var openResource = require('open');

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('clean', function (done) {
    del(['src/**/*.js','src/**/*.js.map'], done);
});


gulp.task('build', ['clean'], function () {

    var result = gulp.src('src/**/*.ts')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return result.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src'));
});

gulp.task('serve', function () {
    var port = 5555;
    var app;

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        openResource('http://localhost:' + port);
    });
});