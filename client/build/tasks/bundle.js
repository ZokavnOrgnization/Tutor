var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var changed = require('gulp-changed');
var replace = require('gulp-replace');
var configFile = '../public/config.js';
var clean = require('gulp-clean')

var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('pre-bundle', ['unbundle', 'build'], function() {
   return bundler.bundle(config);
});

gulp.task('pre-unbundle', function() {
  return bundler.unbundle(config);
});

gulp.task('clone-config', function(){
  return gulp.src(['config.js'])
    .pipe(replace('../public/', ''))
    .pipe(gulp.dest('../public'));
});

gulp.task('clean-config', function() {
  return gulp.src([configFile])
    .pipe(clean({force: true}));
});

gulp.task('bundle', ['pre-bundle', 'clean-config'], function(){
  return gulp.start('clone-config')
});

gulp.task('unbundle', ['pre-unbundle'], function(){
  return gulp.start('clone-config')
});
