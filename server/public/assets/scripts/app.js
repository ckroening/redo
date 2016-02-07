var app = angular.module('bitblot', []);
app.controller('BitBlotCtrl', function ($scope, $http) {

  $scope.loggedIn = false;

  $scope.login = function() {
    $scope.loggedIn = true;
  };

  $scope.showingResults = false;


  //"Requesters": ('send 'envelope' with stuff in it from index2.html', labeled with url, method, body)
  $http({
      method: 'GET',
      url: '/imageData'
    }).then(function (res) {
      $scope.images = res.data;
      $scope.currentImage = $scope.images[$scope.currentImageNum];
      console.log($scope.images);
    }, function (res) {
      if (err) {
        throw err;
      }
    });

  $scope.currentImageNum = 0;

  $scope.next = function() {
    $scope.save();
    $scope.currentImageNum++;
    console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
  };

  $scope.prev = function() {
    $scope.save();
    $scope.currentImageNum--;
    console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
  };

  $scope.save = function() {
    var imageName = $scope.currentImage.name;
    $http({
      method: 'PUT',
      url: '/imageData/' + imageName, //this is the same as "/imageData/:imageName'," in index.js PUT route.
      data: $scope.currentImage //userResponse data is contained here (including ex. curiosityAmount) imageResponse.curiosityAmount
    }).then(function() {
      console.log('Data saved. imageName = ' + imageName);
    })
  };

  $scope.updateAverages = function() {
    var totals = {
      likeAmount: 0,
      happinessAmount: 0,
      sadnessAmount: 0,
      disgustAmount: 0,
      anxietyAmount: 0,
      calmAmount: 0,
      angerAmount: 0,
      curiosityAmount: 0
    };
    var counts = {
      likeAmount: 0,
      happinessAmount: 0,
      sadnessAmount: 0,
      disgustAmount: 0,
      anxietyAmount: 0,
      calmAmount: 0,
      angerAmount: 0,
      curiosityAmount: 0
    };
    for (var i = 0; i < $scope.images.length; i++) {
      for (var prop in totals) {
        if ($scope.images[i][prop]) {
          totals[prop] += parseInt($scope.images[i][prop]);
          counts[prop]++;
        }
      }
    }
    var averages = {};
    for (var prop in totals) {   //for every property in this object, the special keyword 'in' will look through each 'prop' in 'totals' and do the folowing calcs on it.
      averages[prop] = counts[prop] ? Math.round(totals[prop] / counts[prop] * 100 / 5) : 0; //ternary syntax (same as an if or an if/else)
    }
    $scope.averages = averages;
  };

 $scope.showResults = function() {
    $scope.save();
    $scope.updateAverages();
    $scope.showingResults = true;
  };
});
