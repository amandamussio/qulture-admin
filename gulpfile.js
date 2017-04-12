'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
 

var paths = {
  js: ['./*.js', 'config/**/*.js', 'gulp/**/*.js', 'tools/**/*.js', 'packages/**/*.js', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**', '!packages/**/assets/**/js/**'],
  html: ['packages/**/*.html', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**'],
  sass: ['public/styles/*.scss', '!public/lib/**/**'],
  css: ['packages/**/*.css', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**']
};

gulp.task('sass', function () {
  return gulp.src('./public/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});