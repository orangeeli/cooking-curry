(()=> {
  
  'use strict';

  const gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber'),
    nodeDebug = require('gulp-node-debug'),
    path = require('path');

  const tasks = {

    mocha (){
      return gulp.src(['./test/*.js'], {read: false})
        .pipe(plumber())
        .pipe(mocha({
          reporter: 'nyan',
          recursive: true
        }));
    },

    debug (){
      let mochaScript = path.join(__dirname, 'node_modules/mocha/bin/_mocha');

      gulp.src([mochaScript])
        .pipe(nodeDebug({
          debugBrk: true,
          script: ['--watch']
        }));

    }

  };

  gulp.task('test:mocha', tasks.mocha);
  gulp.task('test:mocha:debug', tasks.debug);
  gulp.task('default', ['test:mocha']);
  
})();