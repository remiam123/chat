const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      cleanCss	= require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer');

function styles(){
    return gulp.src('./app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false
}))
    .pipe(cleanCss({
    level: 2
}))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
    server: "app"
    });
    gulp.watch('./app/sass/**/*.sass', styles);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('watch', watch);



    

