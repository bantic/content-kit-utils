var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var qunit  = require('gulp-qunit');
var concat = require('gulp-concat');
var es6ModuleTranspiler = require('gulp-es6-module-transpiler');

var jsSrc = './src/**/*.js';
var distName = 'content-kit-utils.amd.js';
var distDest = './dist/';
var distPath = distDest + distName;
var testRunner = './tests/index.html';

gulp.task('lint', function() {
  return gulp.src(jsSrc)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('lint-built', ['build'], function() {
  return gulp.src(distPath)
             .pipe(jshint('.jshintrc'))
             .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint'], function() {
  return gulp.src(jsSrc)
        .pipe(es6ModuleTranspiler({ type: 'amd' }))
        .pipe(concat(distName))
        .pipe(gulp.dest(distDest));
});

gulp.task('test', ['build'], function() {
  return gulp.src(testRunner).pipe(qunit());
});

gulp.task('watch', function() {
  return gulp.watch(jsSrc, ['build']);
});

gulp.task('default', ['lint', 'build', 'lint-built', 'test']);
