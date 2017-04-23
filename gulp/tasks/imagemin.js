var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
pngquant = require('imagemin-pngquant'),
config = require('../config');

gulp.task('imagemin', function(){
  return gulp.src(config.main.src + config.imagemin.src)
  .pipe($.cache($.imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
  .pipe(gulp.dest(config.main.dest + config.imagemin.dest))
});
