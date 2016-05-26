var responseData = require ('./responseData.js');
var getPersonData = require('./helpers/getPersonData.js');
var createPerson = require('./helpers/createPerson.js');
var cookieParser = require('./helpers/cookieParser');
module.exports = {
  index: function(req){
      return new responseData(200, '<h1>Welcome</h1>Your IP: '
                                      + req.connection.remoteAddress +
                                      '<pre>' + JSON.stringify(cookieParser(req)) + '</pre>',
                                       {
                                        'Set-Cookie': 'mycookie=test',
                                        'Content-Type': 'text/html'
                                      })
  },
  getPerson: function(req){
    var data = getPersonData();
    if (data) {
        cache.cache[req.url] = data;
        return new responseData(200, data);
    }
    else {
      return new responseData(500, 'ReadError');
    }

  },
  notFound: function(){
    return new responseData(404, 'not found');
  },
  createPerson: function(req){
    var data = createPerson(req);
    fs.writeFile('./person.json', data, function(err) {
      if (!err) {
        return new responseData(200, 'File saved');
      } else {
        return new responseData(500, 'Write error');
      }
    });
  }
}
