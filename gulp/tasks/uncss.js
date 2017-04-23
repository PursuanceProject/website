var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('uncss', function () {
  return gulp.src(config.main.dest + config.uncss.src)
  .pipe($.uncss({
    html: config.main.dest + config.uncss.html,
    ignore: config.uncss.ignore
  }))
  .pipe(gulp.dest(config.main.dest + config.uncss.dest));
});
