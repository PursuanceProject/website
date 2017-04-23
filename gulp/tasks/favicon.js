var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
realFavicon = require ('gulp-real-favicon'),
fs = require('fs'),
runSequence = require('run-sequence'),
config = require('../config'),
FAVICON_DATA_FILE = config.main.src + 'favicon/faviconData.json';

// gulp.task("favicons", function () {
//     return gulp.src("favicon.png").pipe(favicons({
//         appName: "My App",
//         appDescription: "This is my application",
//         developerName: "Hayden Bleasel",
//         developerURL: "http://haydenbleasel.com/",
//         background: "#020307",
//         path: "app/favicons/",
//         url: "http://haydenbleasel.com/",
//         display: "standalone",
//         orientation: "portrait",
//         start_url: "/?homescreen=1",
//         version: 1.0,
//         logging: false,
//         online: false,
//         html: "index.html",
//         pipeHTML: true,
//         replace: true
//     }))
//     .on("error", gutil.log)
//     .pipe(gulp.dest("./"));
// });

gulp.task('favicon0', function(done) {
  var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});

gulp.task('favicon1', function(done) {
  realFavicon.generateFavicon({
    masterPicture: config.main.src + 'favicon/favicon.png',
    dest: config.main.src + 'images/favicon',
    iconsPath: 'images/favicon/',
    design: {
      ios: {
        pictureAspect: 'noChange'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: config.favicon.windowsBackgroundColor,
        onConflict: 'override'
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: config.favicon.androidChromeThemeColor,
        manifest: {
          name: config.favicon.name,
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override'
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 53.90625,
        themeColor: config.favicon.safariPinnedTabThemeColor
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false
    },
    markupFile: FAVICON_DATA_FILE
  }, function() {
    done();
  });
});

gulp.task('favicon2', function() {
  gulp.src(config.main.src + 'templates/partials/head.html')
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
    .pipe(gulp.dest(config.main.src + 'templates/partials'));
});


gulp.task('favicon', function(callback) {
  runSequence(
    ['favicon0', // Check for updates on RealFaviconGenerator
    'favicon1', // Generate the icons
    'favicon2'], // Inject favicon markup
    callback
    );
});