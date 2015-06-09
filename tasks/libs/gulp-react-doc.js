var gutil = require('gulp-util');
var fs = require('fs');
var _ = require('lodash');
var docgen = require('react-docgen');
var doctrine = require('doctrine');
var path = require('path');
var through = require('through2');

var PLUGIN_NAME = 'react-doc';

module.exports = function () {

  var result = {};

  return through.obj(docJson, endStream);

  function endStream(cb) {

    var jsonFile = new gutil.File({
      path: PLUGIN_NAME + '.js',
      contents: new Buffer('module.exports =' + JSON.stringify(result, null, 2))
    });

    var requireListFile = new gutil.File({
      path: PLUGIN_NAME + '.jsx',
      contents: new Buffer(getRequireListFileContents(result))
    });

    this.push(jsonFile);
    this.push(requireListFile);

    cb();

  }

  function docJson(file, enc, cb) {

    try {

      var moduleInfo = docgen.parse(String(file.contents));

      if (moduleInfo) {
        result[getModuleName(file)] = _.merge(descriptionProcess(file.path, moduleInfo), getInfoByVinylFile(file))
      }

    } catch (err) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
    }

    return cb();

  }

};

function getInfoByVinylFile(vinylFile) {
  return {
    'name': path.basename(vinylFile.path).split('.')[0],
    'module': path.dirname(getModuleName(vinylFile))
  }
}

function getModuleName(vinylFile) {
  return vinylFile.path.replace(vinylFile.cwd + '/', '')
}

function descriptionProcess(filename, obj) {

  obj = obj || {};

  var descObj = descriptionExtract(obj.description);

  if (descObj) {

    descObj = {
      description: descObj.description,
      examples: pickExampleFromTags(descObj.tags, filename)
    };

    if (_.isObject(obj.props)) {
      _.forEach(_.keys(obj.props), function (key) {
        obj.props[key] = descriptionProcess(filename, obj.props[key]);
      });
    }

    return _.merge({}, obj, descObj);

  }

  return obj;
}

function descriptionExtract(descriptionString) {
  if (!descriptionString) {
    return null;
  }
  return doctrine.parse(descriptionString, {
    unwrap: true,
    sloppy: true,
    tags: [
      'example',
      'exampleFile'
    ]
  })
}

function pickExampleFromTags(tags, filename) {
  return _.reduce(tags, function (exampleList, tagItem) {
    return exampleList.concat(getExample(tagItem, filename))
  }, [])
}

function getExample(tagItem, filename) {

  filename = filename || process.cwd();

  var contents;
  var exampleFile = null;

  if (tagItem.title === 'exampleFile') {
    exampleFile = path.resolve(path.dirname(filename), _.trim(tagItem['description']));
    contents = String(fs.readFileSync(exampleFile, 'utf-8'));
  } else {
    contents = tagItem['description']
  }

  var imports = [];

  var es6Way = contents.match(/import[^'"]+(\S+)/gm);
  var cjsWay = contents.match(/require\((\S+)\)/gm);

  if (es6Way) {
    imports = imports.concat(es6Way);
  }
  if (cjsWay) {
    imports = imports.concat(cjsWay);
  }

  var requireList = _.map(imports, (item)=> {
    var resolvedPathName = resolvePathName(item, {
      exampleFile: exampleFile,
      filename: filename
    });

    return {
      path: resolvedPathName,
      src: item,
      dest: item.replace(/['"](\S+)['"]/gm, JSON.stringify(path.relative(process.cwd(), resolvedPathName)))
    }
  });

  return {
    requireList: requireList,
    contents: _.reduce(requireList, function (contents, requireItem) {
      return contents.replace(requireItem.src, requireItem.dest)
    }, contents)
  };
}


function resolvePathName(item, options = {}) {
  var resolvedPathName;
  var pathName = item.match(/['"](\S+)['"]/)[1];

  if (_.startsWith(pathName, './') || _.startsWith(pathName, '../')) {
    resolvedPathName = path.resolve(path.dirname(options.exampleFile || options.filename), pathName);
  } else {
    resolvedPathName = pathName;
  }

  if (_.contains(['.js', '.jsx', '.es', '.es6'], path.extname(resolvedPathName))) {
    return resolvedPathName.slice(0, -path.extname(resolvedPathName).length);
  }

  return resolvedPathName;
}


function getRequireListFileContents(result) {


  var requireList = {};

  findExample(result);

  function findExample(obj) {
    _.forEach(_.keys(obj), function (key) {
      if (_.isPlainObject(obj[key])) {
        findExample(obj[key])
      } else if (key === 'examples') {
        _.forEach(obj[key], function (exampleItem) {
          _.forEach(exampleItem.requireList, function (requireItem) {
            requireList[requireItem.path] = requireItem;
          })
        })
      }
    })
  }

  return _(requireList)
    .values()
    .map(function (requireItem) {
      return [
        'require("',
        path.relative(process.cwd(), requireItem.path),
        '"',
        ');'
      ].join('');
    })
    .push('module.exports = require;')
    .join('\n');
}
