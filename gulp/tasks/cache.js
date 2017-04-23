var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('cache:clear', function (callback) {
  return $.cache.clearAll(callback)
});
