const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
    return gulp.src('*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' })) 
        .pipe(gulp.dest('dist')); 
}

exports.minify = minifyCSS; 
