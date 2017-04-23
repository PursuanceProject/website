var gulp = require('gulp'),
browserSync = require('browser-sync'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('./app/sass/**/*.+(sass|scss)', ['sass']);
  gulp.watch('./dist/js/*.js', ['$.lint:js']);
  gulp.watch('./app/images/**/*.+(png|jpg|jpeg|gif|svg)', ['imagemin']);
  gulp.watch('./app/svg/**/*', ['svgSprite']);
  gulp.watch('./app/data/**/*.json', ['json']);
  gulp.watch('./app/js/**/*.js', browserSync.reload);
  gulp.watch('./dist/*.html', browserSync.reload);
  gulp.watch([
    config.main.src + config.nunjucks.watch,
    config.main.src + config.nunjucks.src,
    config.main.src + config.nunjucks.data
    ], ['nunjucks']);
});
