var express = require('express'); //include express.
var router = express.Router(); //router holds the return of the Router method of the express object.

//Router will help manage how incoming requests are handled.
var path = require('path'); //include path dependency (path will help serve files from server to client).
var db = require('../db');

//"Receivers":
router.get('/',function(req,res,next){ //next is how express handles middleware. User hits / and handler sends back main holding page (for all stuff): index2.html.
  res.sendFile(path.join(__dirname,'../public/assets/views/index.html')); //static files are served via server/public folder.
});

router.post('/login', function(req, res) {
  console.log('logged in');
  res.send('this works.'); // FIXME: implement
  //think of as connecting to a login "file" which will later be contained in DB.
});

router.get('/imageData', function(req, res) {
  db.getImageData(function(images) {
    res.send(images);
  });
});

router.put('/imageData/:imageName', function(req, res) { // "envelope" received. Contains: url, body, method
  var imageName = req.params.imageName;  //These variables are what "open up" the "envelope" and "hold" the contents of the http call received from Client app.js
  var userResponses = req.body;
  db.putResponse(imageName, userResponses);
  res.send('Sent data for image ' + imageName + ' to database.');
  console.log('sending data for image ' + imageName + ' to db.');
});

router.get('/results', function(req, res) { //this handler is looking through ALL users data (rather than 1).
  console.log('results!');
  res.json({
    name: 'bob'
  });
});

module.exports = router; //export order: tells router to exist as a module for use throughout rest of app.