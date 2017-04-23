var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
replace = require('gulp-replace'),
del = require('del'),
runSequence = require('run-sequence'),
config = require('../config');

// (`ㅅ`)づ bootstrap rules

gulp.task('bootcss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ framework imports\n', '// (`ㅅ`)づ framework imports\n\n@import ./bower_components/bootstrap-sass/assets/stylesheets/bootstrap'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-bootcss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import ./bower_components/bootstrap-sass/assets/stylesheets/bootstrap', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('bootcssfix', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/bootstrap'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-bootcssfix', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/bootstrap', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('bootjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("'./bower_components/detectizr/dist/detectizr.js',",
        "'./bower_components/detectizr/dist/detectizr.js',\n'./bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',"))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-bootjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("\n'./bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',",
        ""))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('bootjsfix', function(){
  gulp.src(config.main.src + '/js/dormant/bootstrap.js')
      .pipe(gulp.dest(config.main.src + '/js'));
});

gulp.task('no-bootjsfix', function(callback){
  del([config.main.src + '/js/bootstrap.js'], callback);
});


gulp.task('bootstrap', function(callback) {
  runSequence(
    ['no-framework'],
    ['bootcssfix'],
    ['bootjsfix'],
    ['bootjs'],
    ['bootcss'],
    callback
    );
});

gulp.task('no-bootstrap', function(callback) {
  runSequence(
    ['no-bootcssfix'],
    ['no-bootjsfix'],
    ['no-bootjs'],
    ['no-bootcss'],
    callback
    );
});

// (`ㅅ`)づ semantic rules

gulp.task('semanticcss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ framework imports\n', '// (`ㅅ`)づ framework imports\n\n@import ./bower_components/semantic-ui-sass/app/assets/stylesheets/semantic-ui.scss'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('semanticjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("'./bower_components/detectizr/dist/detectizr.js',",
        "'./bower_components/detectizr/dist/detectizr.js',\n'./bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',"))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-semanticcss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import ./bower_components/semantic-ui-sass/app/assets/stylesheets/semantic-ui.scss', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-semanticjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("\n'./bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',",
        ""))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('semantic', function(callback) {
  runSequence(
    ['no-framework'],
    ['semanticjs'],
    ['semanticcss'],
    callback
    );
});

gulp.task('no-semantic', function(callback) {
  runSequence(
    ['no-semanticjs'],
    ['no-semanticcss'],
    callback
    );
});

// (`ㅅ`)づ global rules

gulp.task('no-framework', function(callback) {
  runSequence(
    ['no-bootstrap'],
    ['no-semantic'],
    callback
    );
});


