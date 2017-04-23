var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('font', function () {
  return gulp.src(config.main.src + 'fonts/**/*')
  .pipe(gulp.dest(config.main.dest + 'fonts'))
});

gulp.task('svgfile', function () {
  return gulp.src(config.main.src + 'sass/generated/svg/*')
  .pipe(gulp.dest(config.main.dest + 'svg'))
});

