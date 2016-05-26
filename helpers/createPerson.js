var createPerson = function(req){
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    var data = Buffer.concat(body).toString();
    var obj = JSON.parse(data);
    if (obj.name) obj.name = obj.name.trim();
    data = JSON.stringify(obj);
    return data;
});
}
module.exports = createPerson;
