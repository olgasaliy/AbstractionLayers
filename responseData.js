var responseData = function(statusCode, body, headData){
  this.head = new Head(statusCode, headData);
  this.data = new Body(body);
}
var Head = function(statusCode, data){
  this.statusCode = statusCode;
  this.data;
  if (data)
    this.data = data;
}
var Body = function(body){
  this.body;
  if (body)
    this.body = body
}
module.exports = responseData;
