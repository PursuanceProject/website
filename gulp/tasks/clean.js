var gulp = require('gulp'),
del = require('del'),
config = require('../config');

gulp.task('clean', function(callback){
  del(['./dist', './app/sass/generated', './*.html', './css', './images/', './js'], callback);
});
