var gulp = require('gulp'),
runSequence = require('run-sequence'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'imagemin',
    ['svgfile', 'font', 'js', 'json'],
    ['readme', 'sass', 'nunjucks'],
    ['browserSync', 'watch'],
    callback
    );
});
