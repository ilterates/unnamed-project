// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', ['$scope', '$http', '$sce', '$injector', function($scope, $http, $sce, $injector) {
  $scope.posting = function () {
    var vm = this;
    console.log("button clicked");
      $http({
        method: 'POST',
        url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey='+MLAB_API_KEY,
        data: JSON.stringify({
          title      : $('#title').val(),
          link       : $('#link').val(),
          description: $('#description').val()
        }),
        contentType: "application/json"
      }).then(function postSuccessCallback(response) {
        console.log(response.data);
        console.log("post success");
      }, function postErrorCallback(response) {
        console.log('There was an error posting the data', response);
      });
  };

  $scope.fetch = function () {
    console.log("is this fetch working?");
    var vm = this;
    $http({
      method: 'GET',
      url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA',
    }).then(function getSuccessCallback(response) {
      $scope.lenght = Object.keys(response.data).reverse()[0];
      $scope.data = response.data;
      $scope.jeezy = $scope.data[$scope.lenght].link;
      console.log("this is the json"+response.data[$scope.lenght].link);
      console.log("this is jeezy"+$scope.jeezy);
      $scope.url = $sce.trustAsResourceUrl($scope.jeezy);
    }, function getErrorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  };

}]);
