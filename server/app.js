var express = require('express'); //bring in installed express.
var app = express(); //'app' is an instance of Express.
var index = require('./routes/index'); //index variable holds index module.
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', index); //when there is a request at root value, use index variable (index module).

app.use(express.static(path.join(__dirname,'./public')));

var server = app.listen(3000,function(){
  var port = server.address().port;
  console.log('Listening on port: ',port);
});
