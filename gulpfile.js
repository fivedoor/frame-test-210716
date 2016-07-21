
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var checkPages = require("check-pages");
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var connect = require('gulp-connect');



// server
gulp.task('connect', function() {
  connect.server({
       root: 'src',
    livereload: true
  });
});

// html reload
gulp.task('html', function () {
 gulp.src('./src/index.html')
   .pipe(connect.reload());
});

// default
gulp.task('default', ['connect', 'watch']);

// watch
gulp.task('watch', function(){
  gulp.watch(['./src/index.html'], ['html']);
});


// VALIDATE 
gulp.task("checkDev", ['default'], function(callback) {
  var options = {
    pageUrls: [
      'http://localhost:8080'
    ],
    checkLinks: true,
    noEmptyFragments: true,
    noLocalLinks: true,
    noRedirects: true,
    onlySameDomain: true,
    preferSecure: true,
    queryHashes: true,
    checkCaching: true,
    checkCompression: true,
    checkXhtml: true,
    summary: true,
    terse: true,
    maxResponseTime: 200,
    userAgent: 'custom-user-agent/1.2.3'
  };
  checkPages(console, options, callback);
});

