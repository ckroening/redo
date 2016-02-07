//schemas here are all contained in the same file and 'exported' or saved as variables for immediate use in the functions contained here.
//db.js is what interacts directly with database and between database and server. It is the database-server interface.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitblot');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

var imageSchema = mongoose.Schema({
  name: String,
  src: String
});

var Image = mongoose.model('Image', imageSchema);

var userResponseSchema = mongoose.Schema({
  imageId: mongoose.Schema.Types.ObjectId,
  likeAmount: Number,
  happinessAmount: Number,
  sadnessAmount: Number,
  disgustAmount: Number,
  anxietyAmount: Number,
  calmAmount: Number,
  angerAmount: Number,
  curiosityAmount: Number
});

var UserResponse = mongoose.model('userResponse', userResponseSchema);

var putResponse = function(imageName, userResponses) {
  var criteria = {name: imageName};
  Image.findOne(criteria, function(err, image) {
    if (err) {
      throw err;
    }

    if (!image) {
      console.log(imageName + ' not found.');
      return;
    }

    var criteria = {imageId: mongoose.Types.ObjectId(image._id)}; //this is corresponding to the imageId property of the userResponseSchema (we could have also used the property, "name" instead of "imageId")
    console.log(image);
    var update = {};

    if (userResponses.likeAmount) {
      update.likeAmount = userResponses.likeAmount;
    }
    if (userResponses.happinessAmount) {
      update.happinessAmount = userResponses.happinessAmount;
    }
    if (userResponses.sadnessAmount) {
      update.sadnessAmount = userResponses.sadnessAmount;
    }
    if (userResponses.disgustAmount) {
      update.disgustAmount = userResponses.disgustAmount;
    }
    if (userResponses.anxietyAmount) {
      update.anxietyAmount = userResponses.anxietyAmount;
    }
    if (userResponses.calmAmount) {
      update.calmAmount = userResponses.calmAmount;
    }
    if (userResponses.angerAmount) {
      update.angerAmount = userResponses.angerAmount;
    }
    if (userResponses.curiosityAmount) {
      update.curiosityAmount = userResponses.curiosityAmount;
    }

    var options = {upsert: true};
    UserResponse.findOneAndUpdate(criteria, update, options, function (err, userResponse) {
      if (err) {
        throw err;
      }
      console.log('Data saved.');
    });
  });
};

var loadInitialData = function() { //this is a bootstrap to grab data immediately for when the server starts.
  var data = require('./data.json');
  for (var i = 0; i < data.length; i++) {
    var criteria = {name: data[i].name};
    var update = {src: data[i].src};
    var options = {upsert: true};
    Image.findOneAndUpdate(criteria, update, options, function(err, image) {
      if (err) {
        throw err;
      }
      if (image) { //these two logs are telling us whether or not the image has been updated or created from scratch. (for use later)
        //console.log('Updated image: ' + data[i].name);
      } else {
        //console.log('Created image: ' + data[i].name);
      }
    });
  }
};

loadInitialData();






/*
Image.find(function (err, images) {
  if (err) return console.error(err);
  console.log(images);
});
*/

/* // TODO: finish this; work in progress
var createUser = function() {

};

var calculateResults = function(getData) {

};

*/
var getImageData = function(callback) {
  Image.find(function(err, images){
    if (err) {
      throw err;
    }
    UserResponse.find(function(err, userResponses){
      if (err) {
        throw err;
      }
      var combined = [];  //combine images with responses.
      for (var j = 0; j < images.length; j++) {
        var combinedItem = {
          name: images[j].name,
          src: images[j].src
        };
        for (var i = 0; i < userResponses.length; i++) {
          if (userResponses[i].imageId.toString() == images[j]._id.toString()) {
            combinedItem.likeAmount = userResponses[i].likeAmount;
            combinedItem.happinessAmount = userResponses[i].happinessAmount;
            combinedItem.sadnessAmount = userResponses[i].sadnessAmount;
            combinedItem.disgustAmount = userResponses[i].disgustAmount;
            combinedItem.anxietyAmount = userResponses[i].anxietyAmount;
            combinedItem.calmAmount = userResponses[i].calmAmount;
            combinedItem.angerAmount = userResponses[i].angerAmount;
            combinedItem.curiosityAmount = userResponses[i].curiosityAmount;
          }
        }
        combined.push(combinedItem);
      }
      callback(combined);
    })
  })
};

/*
var getUserData = function(username) { //get image data for a specific user
  var user = getUser(username);

  return [{
    name: 'cat',            // comes from image entity
    src: '/images/cat.jpg', // comes from image entity
    likeLevel: 3,           // comes from userResponse entity
    happinessLevel: 4       // comes from userResponse entity
  }];
};
*/

module.exports = {
  putResponse: putResponse,
  getImageData: getImageData
};