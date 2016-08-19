// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', ['$scope', '$http', '$sce', '$injector', function($scope, $http, $sce, $injector) {
  $scope.posting = function () {
    var vm = this;

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
      }).then(function postSuccessCallback(response) {
        console.log(response.data);
        console.log("post success");
      }, function postErrorCallback(response) {
        console.log('There was an error posting the data', response);
      });

  };
  $scope.fetch = function () {
    var vm = this;
    $http({
      method: 'GET',
      url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA',
    }).then(function getSuccessCallback(response) {
      $scope.lenght = Object.keys(response.data).reverse()[0];
      $scope.data = response.data;
      console.log(response.data[$scope.lenght].link);
      $scope.url = $sce.trustAsResourceUrl('response.data[$scope.lenght].link');

    }, function getErrorCallback(response) {
      console.log('There was an error getting the data', response);
    });

  };


}]);
