(()=> {
  
  'use strict';

  const gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber');

  const tasks = {

    mocha (){
      return gulp.src(['./test/*.js'], {read: false})
        .pipe(plumber())
        .pipe(mocha({
          reporter: 'nyan',
          recursive: true
        }));
    }

  };

  gulp.task('test:mocha', tasks.mocha);
  gulp.task('default', ['test:mocha']);
  
})();