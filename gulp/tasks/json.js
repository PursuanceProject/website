var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('json', function(){
  gulp.src(config.main.src + config.json.src)
  .pipe($.extend(config.json.file))
  .pipe(gulp.dest(config.main.src + config.json.dest));
});