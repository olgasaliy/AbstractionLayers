
// HTTP Server
http.createServer(function (req, res) {

  if (cacheServe(req)){
    var response = cacheServe(req);
    res.writeHead(response.head.statusCode, response.head.data)
    res.end(response.data)
  }
  else {
    var result = routes(req);
    res.writeHead(result.head.statusCode, result.head.data);
    res.end(result.data.body);
  }
  logger(req);
}).listen(8000);
