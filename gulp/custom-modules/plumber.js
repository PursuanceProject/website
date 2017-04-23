var $ = require('gulp-load-plugins')();

module.exports = customPlumber;

function customPlumber (errTitle) {
  return $.plumber({
    errorHandler: $.notify.onError({
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>",
      sound: "Funk"
    })
  });
}
