import gulp from 'gulp';
import _ from 'lodash';
import path from 'path';
import symlink from 'gulp-symlink'

const defaultConfig = {
  src: [
    'components/',
    'src/'
  ],
  dest: [
    'node_modules/components',
    'node_modules/src'
  ]
};

let conf;

setOptions(); // init

const TASK_NAME = 'symlink';

const task = gulp.task(TASK_NAME, ()=> {
  return gulp.src(conf.src)
    .pipe(symlink(conf.dest, {force: true}));
});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}
