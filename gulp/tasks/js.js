var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('js', function() {
  return gulp.src(config.js.src)
    .pipe($.concat(config.js.title))
    .pipe(gulp.dest(config.main.dest + config.js.dest));
});
