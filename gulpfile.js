var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Styles
gulp.task('styles', function() {
    console.log('starting styles task');
});

// Scripts
gulp.task('scripts', function (cb) {
    pump([
        gulp.src('public/scripts/*.js'),
        uglify(),
        gulp.dest('public/dist/')
      ],
      cb
    );
  });

// Images
gulp.task('images', function() {
    console.log('starting images task');
});

gulp.task('default', function() {
    console.log('starting default task');
});
