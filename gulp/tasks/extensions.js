var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
replace = require('gulp-replace'),
del = require('del'),
runSequence = require('run-sequence'),
config = require('../config');

// (`ㅅ`)づ toggle rules

gulp.task('toggle', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/toggle'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-toggle', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/toggle', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

// (`ㅅ`)づ patterns rules

gulp.task('patterns', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import required/patterns'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-patterns', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import required/patterns', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

// (`ㅅ`)づ filters rules

gulp.task('filters', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/filters'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-filters', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/filters', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

// (`ㅅ`)づ loaders rules

gulp.task('loaders', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/SpinThatShit/loaders.scss'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-loaders', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/SpinThatShit/loaders.scss', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

// (`ㅅ`)づ animation rules

gulp.task('animation', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import ./bower_components/animatewithsass/animate.scss'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-animation', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import ./bower_components/animatewithsass/animate.scss', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

// (`ㅅ`)づ clipboard rules

gulp.task('clipboardjsfix', function(){
  gulp.src(config.main.src + '/js/dormant/clipboard.js')
      .pipe(gulp.dest(config.main.src + '/js'));
});

gulp.task('no-clipboardjsfix', function(callback){
  del([config.main.src + '/js/clipboard.js'], callback);
});

gulp.task('clipboardjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("'./bower_components/detectizr/dist/detectizr.js',",
        "'./bower_components/detectizr/dist/detectizr.js',\n'./bower_components/clipboard/dist/clipboard.js',"))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-clipboardjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("\n'./bower_components/clipboard/dist/clipboard.js',",
        ""))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('clipboard', function(callback) {
  runSequence(
    ['clipboardjs'],
    ['clipboardjs2'],
    callback
    );
});

gulp.task('no-clipboard', function(callback) {
  runSequence(
    ['no-clipboardjs'],
    ['no-clipboardjs2'],
    callback
    );
});

// (`ㅅ`)づ chosen rules

gulp.task('chosencss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ framework imports\n', '// (`ㅅ`)づ framework imports\n\n@import ./bower_components/chosen/chosen.css'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-chosencss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import ./bower_components/chosen/chosen.css', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('chosencssfix', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/chosen'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-chosencssfix', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/chosen', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('chosenjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("'./bower_components/detectizr/dist/detectizr.js',",
        "'./bower_components/detectizr/dist/detectizr.js',\n'./bower_components/chosen/chosen.jquery.js',"))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-chosenjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("\n'./bower_components/chosen/chosen.jquery.js',",
        ""))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('chosenjsfix', function(){
  gulp.src(config.main.src + '/js/dormant/chosen.js')
      .pipe(gulp.dest(config.main.src + '/js'));
});

gulp.task('no-chosenjsfix', function(callback){
  del([config.main.src + '/js/chosen.js'], callback);
});


gulp.task('chosen', function(callback) {
  runSequence(
    ['chosencssfix'],
    ['chosenjsfix'],
    ['chosenjs'],
    ['chosencss'],
    callback
    );
});

gulp.task('no-chosen', function(callback) {
  runSequence(
    ['no-chosencssfix'],
    ['no-chosenjsfix'],
    ['no-chosenjs'],
    ['no-chosencss'],
    callback
    );
});

// (`ㅅ`)づ flexslider rules

gulp.task('flexslidercss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ optional imports\n', '// (`ㅅ`)づ optional imports\n\n@import optional/flexslider'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-flexslidercss', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import optional/flexslider', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('flexsliderjsfix', function(){
  gulp.src(config.main.src + '/js/dormant/flexsliderfix.js')
      .pipe(gulp.dest(config.main.src + '/js'));
});

gulp.task('no-flexsliderjsfix', function(callback){
  del([config.main.src + '/js/flexsliderfix.js'], callback);
});

gulp.task('flexsliderjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("'./bower_components/detectizr/dist/detectizr.js',",
        "'./bower_components/detectizr/dist/detectizr.js',\n'./app/js/flexslider.js',"))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-flexsliderjs', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace("\n'./app/js/flexslider.js',",
        ""))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('flexslider', function(callback) {
  runSequence(
    ['flexslidercss'],
    ['flexsliderjs'],
    ['flexsliderjsfix'],
    callback
    );
});

gulp.task('no-flexslider', function(callback) {
  runSequence(
    ['no-flexslidercss'],
    ['no-flexsliderjs'],
    ['no-flexsliderjsfix'],
    callback
    );
});

// (`ㅅ`)づ font-awesome rules

gulp.task('font-awesome', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('// (`ㅅ`)づ framework imports\n', '// (`ㅅ`)づ framework imports\n\n@import ./bower_components/font-awesome/scss/font-awesome\n@import optional/font-awesome'))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});

gulp.task('no-font-awesome', function(){
  gulp.src(config.main.src + '/sass/required/required.sass')
    .pipe(replace('\n@import ./bower_components/font-awesome/scss/font-awesome\n@import optional/font-awesome', ''))
    .pipe(gulp.dest(config.main.src + '/sass/required'));
});