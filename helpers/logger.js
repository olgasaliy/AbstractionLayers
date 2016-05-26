var logger = function(req) {
  console.log([new Date().toISOString(), req.method, req.url].join(' '));

}
module.exports = logger;
