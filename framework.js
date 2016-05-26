var fs = require('fs'),
  vm = require('vm'),
  path = require('path'),
  http = require('http'),
  getPersonData = require('./helpers/getPersonData')
  responseData = require ('./responseData.js'),
  cacheServe = require('./helpers/cacheServe')
  cookieParser = require('./helpers/cookieParser.js'),
  cache = require('./cache'),
  routes = require('./routes'),
  logger = require('./helpers/logger'),
  controller = require('./controllers');

var context = {
  fs: fs,
  http: http,
  path: path,
  cacheServe: cacheServe,
  responseData: responseData,
  cookieParser: cookieParser,
  getPersonData: getPersonData,
  cache: cache,
  routes: routes,
  logger: logger,
  controller: controller
}

context.global = context;
var sandbox = vm.createContext(context);

var fileName = './badServer.js';

fs.readFile(fileName, function(err, src) {
  // Run an application in sandboxed context
  var script = vm.createScript(src, fileName);
  script.runInNewContext(sandbox);

});
