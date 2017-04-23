var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
customPlumber = require('../custom-modules/plumber'),
config = require('../config');

gulp.task('lint:js', function(){
  return gulp.src('./dist/js/*.js')
  .pipe(customPlumber('JSHint Error'))
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.jshint.reporter('fail', {
    ignoreWarning: true,
    ignoreInfo: true
  }))
  .pipe($.jscs({
    fix: true,
    configPath: '.jscsrc'
  }))
  .pipe(gulp.dest('./dist/js'))
});
