var config = {
  main: {
    src: './app/',
    dest: './dist/'
  },
  sass: {
    src: 'sass/style.sass',
    dest: 'css',
    error: 'Error Running SASS'
  },
  favicon: {
    windowsBackgroundColor: '#eeeeee',
    androidChromeThemeColor: '#eeeeee',
    name: 'codecode/',
    safariPinnedTabThemeColor: '#eeeeee'
  },
  root: {
    src: './gulp/config.js',
    dest: './gulp/'
  },
  frameworkSass: {
    src: 'sass/vendors/framework.sass',
    dest: 'sass/vendors/'
  },
  frameworkJs: {
    src: './gulp/config.js',
    dest: './gulp/'
  },
  uncss: {
    src: 'css/style.css',
    dest: 'css',
    html: '**/*.html',
    ignore: [/.chosen/, /.popover/, /.calendar/, /.modal/]
  },
  inlineCss: {
    src: '*-mail.html'
  },
  nunjucks: {
    src: 'pages/**/*.*',
    error: 'Error Running Nunjucks',
    template: 'templates/',
    watch: 'templates/**/*',
    data: 'data/generated/data.json'
  },
  ghPages: {
    src: '**/*'
  },
  imagemin: {
   src: 'images/**/*.+(png|jpg|jpeg|gif|svg)',
   dest: 'images'
 },
 js: {
  src: ['./bower_components/jquery/dist/jquery.js',
  './bower_components/modernizr/modernizr.js',
  './bower_components/detectizr/dist/detectizr.js',
  './app/js/*.js'],
  dest: 'js',
  title: 'main.js'
},
json: {
  src: 'data/*.json',
  dest: 'data/generated',
  error: 'Error Running JSON extend',
  file: 'data.json'
}
};

// Exporting config
module.exports = config;
