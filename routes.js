var routes = {
  '/': function(method){if (method === 'GET') return 'index' },
  '/person': function(method){if (method === 'GET') return 'getPerson'
                              if (method === 'POST') return 'createPerson'}
}
module.exports = function(req){
  var method = routes[req.url];
  return method?controller[method(req.method)](req):controller['notFound']();

}
