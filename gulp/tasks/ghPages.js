var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('gh-pages', function() {
  return gulp.src(config.main.dest + config.ghPages.src)
  .pipe($.ghPages());
});
