var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Whatch for changes
gulp.task('watch', function() {

    // Serve files from the root of this project. https://localhost:300
    browserSync.init({
        server: {
            baseDir: "./client"
        },
        notify: false
    });

    gulp.watch(['**/*.html', 'js/**/*.js']).on('change', browserSync.reload);

});

gulp.task('default', ['watch']);