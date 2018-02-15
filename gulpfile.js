'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCSS = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const stylelint = require('gulp-stylelint');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');

gulp.task('stylelint', () => {
  return gulp.src([
    './_assets/scss/**/*.scss',
    '!./_assets/scss/vendor/_normalize.scss',
    '!./_assets/scss/fonts/*.scss'
  ])
  .pipe(stylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
});

gulp.task('sass', () => {
  return gulp.src('./_assets/scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('lint', () => {
  return gulp.src([
    './_assets/js/components/_formspree.js',
    './_assets/js/components/_infiniteScroll.js',
    './_assets/js/components/_mailChimp.js',
    './_assets/js/components/_miscellaneous.js',
    './_assets/js/components/_pageTransition.js',
    './_assets/js/components/_popup.js',
    './_assets/js/_inits.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('browserify', () => {
  return browserify('./_assets/js/app.js')
  .transform('babelify', {presets: ['env']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('zip', () => {
  return gulp.src([
    './**',
    '!./.DS_Store',
    '!./.git',
    '!./node_modules/**'
  ])
  .pipe(zip('barber-jekyll.zip'))
  .pipe(gulp.dest('../'))
});

gulp.task('build', ['sass', 'browserify']);

gulp.task('watch', () => {
  gulp.watch('./_assets/scss/**/*.scss', ['sass']);
  gulp.watch('./_assets/js/**/*.js', ['browserify']);
});

gulp.task('default', ['build', 'watch']);
