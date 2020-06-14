const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../client'));

app.get('/apple', (req, res) => {
  console.log(csvString, document)
  res.send(document)
})

app.post('/', (req, res) => {
  console.log('working')
  var object = JSON.parse(req.body.JSON)
  var result = convert(object);
  console.log(result)
  res.send(result)
  res.end();
})

//input is an object
//create an empty array
//itterate over object
//push keys into first array index
//push first id values into next index and so on
//output is a CSV
function convert (obj) {
  var arr = [];
  var array = [];
  // if(Array.isArray(obj)) {
  //   for(var i = 0; i < obj.length; i++) {
  //     arr.push(Object.keys(obj[i]).join(", "))
  //     array.push(Object.values(obj[i]).join(", "))
  //     var string = arr.join(', ')
  //     var string1 = array.join(', ')
  //     var result = string +  '/' + string1;
  //     return result;
  //   }
  // }
  arr.push(Object.keys(obj).join(", "))
  array.push(Object.values(obj).join(", "))
  var string = arr.join(', ')
  var string1 = array.join(', ')
  var result = string +  '/' + string1;
  console.log(result)
  var document = '<!DOCTYPE html><html><head><title>CSV Mini App</title></head><body><h1>JSON to CSV!</h1><form action="http://localhost:3000/?JSON" method="get"> <input type="text" id="JSON" name="JSON" ><input type="submit" value="Submit"> </form><form action="http://localhost:3000/" method="post"><input type="text" id="JSON" name="JSON" > <input type="submit" value="Submit"> </form> <p>' + result + '</p></body></html>';
  return document;
}
