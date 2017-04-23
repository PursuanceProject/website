var gulp = require('gulp'),
browserSync = require('browser-sync'),
$ = require('gulp-load-plugins')(),
customPlumber = require('../custom-modules/plumber'),
config = require('../config');

gulp.task('sass', function(){
  return gulp.src(config.main.src + config.sass.src)
  .pipe(customPlumber(config.sass.error))
  .pipe($.sass())
  .pipe($.autoprefixer())
  .pipe(gulp.dest(config.main.dest + config.sass.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
});
