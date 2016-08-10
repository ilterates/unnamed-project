// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', ['$scope', '$http', '$injector', function($scope, $http, $injector) {

  $scope.posting = function () {
    console.log("testing");
    var vm = this;
    var newContent = {};

    console.log("button clicked");
      $http({
        method: 'POST',
        url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA',
        data: JSON.stringify({
          title      : $('#title').val(),
          link       : $('#link').val(),
          description: $('#description').val()
        }),
        contentType: "application/json"
      }).then(function successCallback(response) {
        console.log(response.data);
        console.log("success");
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });


  };
  var fake = function(){
    console.log("testing the function call");
  };
}]);
