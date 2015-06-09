import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import gulp from 'gulp'
import gutil from 'gulp-util'
import rename from 'gulp-rename'

import gulpSvgIgnore from 'gulp-svg-ignore'
import gulpSvgStore from 'gulp-svgstore'

import syncProcessor from 'gulp-sync-processor';

import watcher from './libs/watcher'

const taskName = path.basename(__filename, path.extname(__filename));

const defaultConfig = {
  src: [
    'semantic/assets/svgs/*.svg'
  ],
  dest: 'public/assets/images',
  destDocs: 'components/elements/examples',
  options: {inlineSvg: true}
};

let conf;

setOptions(); // init

const TASK_NAME = 'svg-store';

const task = gulp.task(TASK_NAME, function () {

  function bundle() {

    const files = [];

    return gulp.src(conf.src)
      .pipe(gulpSvgIgnore([
        '#gridlines',
        '#grids'
      ]))
      .pipe(rename(function (pathObj) {
        files.push(pathObj.basename);
      }))
      .pipe(gulpSvgStore(conf.options))
      .on('error', gutil.log.bind(this))
      .pipe(gulp.dest(conf.dest))
      .pipe(syncProcessor({
        options: {
          data: {
            files: files
          },
          isProcess: function (data) {
            return data.files.length > 0
          }
        },
        files: [
          {src: path.join(__dirname, 'tpls/Symbol.auto.jsx.ejs')}
        ]
      }))
      .pipe(rename(function (pathObj) {
        switch (pathObj.extname) {
          case'.jsx':
            pathObj.dirname = conf.destDocs;
            break;
          default:
            pathObj.dirname = conf.dest;
        }
      }))
      .pipe(gulp.dest(process.cwd()))
      .pipe(watcher.pipeTimer(taskName))
  }

  if (watcher.isWatching()) {
    gulp.watch([].concat(conf.src), (evt)=> {
      gutil.log(evt.path, evt.type);
      bundle();
    });
  }

  return bundle();

});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}