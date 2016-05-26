
var cacheServe = function(req){
    if (cache[req.url] && req.method === 'GET') {
      var res = new responseData(200,cache.cache[req.url]);
      return res;
    }
}
module.exports = cacheServe;
