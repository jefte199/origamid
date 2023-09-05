const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function compilaSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
}

gulp.task("sass", compilaSass)

function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

gulp.task('browser-sync', browser);

function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);
}

gulp.task('watch', watch);
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
