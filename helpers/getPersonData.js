
var path = require('path');
var fs = require('fs');
var pathToFile = path.join(__dirname, '../person.json');
var getPersonData = function(){
  var data = fs.readFileSync(pathToFile);
  if (data){
    var obj = JSON.parse(data);
    obj.birth = new Date(obj.birth);
    var difference = new Date() - obj.birth;
    obj.age = Math.floor(difference / 31536000000);
    delete obj.birth;
    var data = JSON.stringify(obj);
    return data;
  }
}
module.exports = getPersonData;
