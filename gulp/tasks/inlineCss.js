var gulp = require('gulp'),
inlineCss = require('gulp-inline-css'),
config = require('../config');

gulp.task('inlinecss', function() {
    return gulp.src(config.main.dest + config.inlineCss.src)
        .pipe(inlineCss())
        .pipe(gulp.dest(config.main.dest));
});
