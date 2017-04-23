var gulp = require('gulp'),
browserSync = require('browser-sync'),
config = require('../config');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: config.main.dest
    },
  })
})
