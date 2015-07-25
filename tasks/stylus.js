import path from 'path'
import _ from 'lodash'
import gulp from 'gulp'
import mergeSteam from 'merge-stream'

import gutil from 'gulp-util'
import stylus from 'gulp-stylus'
import autoprefixer from 'autoprefixer-stylus'

import minifyCSS from 'gulp-minify-css';
import bootstrap from'bootstrap-styl';
import jeet from'jeet';

import watcher from './libs/watcher'

console.log(bootstrap.toString());

const defaultConfig = {
  'files': [
    {
      'entry': 'src/stylus/index.styl',
      'src': [
        'src/stylus/{,**/}*.styl'
      ],
      'dest': 'public/assets/css',
      'options': {
        'watch': true
      }
    }
  ],
  'options': {
    'include': [
      path.join(process.cwd(), 'node_modules'),
      path.join(process.cwd(), 'node_modules/bootstrap-styl/bootstrap/mixins')
    ],
    'use': [
      autoprefixer({ browsers: ['last 5 versions']}),
      includeCss(),
      jeet(),
      bootstrap()
    ],
  }
};

let conf;
setOptions(); // init
const TASK_NAME = 'stylus';

const task = gulp.task(TASK_NAME, function () {

  function bundleThis(fileConf = {}) {

    fileConf.options = _.merge({}, conf.options, fileConf.options);

    function bundle() {
      return gulp.src(fileConf.entry)
        .pipe(stylus(fileConf.options))
        .on('error', gutil.log.bind(gutil, 'Stylus Error'))
        .pipe(gulp.dest(fileConf.dest))
        .pipe(watcher.pipeTimer(TASK_NAME))
    }

    if (fileConf.options.watch && watcher.isWatching()) {
      console.log(fileConf.src)
      gulp.watch([].concat(fileConf.src), function (evt) {
        gutil.log(evt.path, evt.type);
        bundle();
      });
    }

    return bundle();
  }

  return mergeSteam.apply(gulp, _.map(conf.files, bundleThis));

});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}

function includeCss() {
  return function (style) {
    style.set('include css', true);
  }
}

function whenInProductionDoMinify() {
  return process.env.NODE_ENV === 'production' || gutil.env.debug ? minifyCSS({
    keepBreaks:true
  }) : gutil.noop()
}
