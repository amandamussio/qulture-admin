'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./public/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/styles/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.watch('./public/styles/*.scss', ['sass']);
});