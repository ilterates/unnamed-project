// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', ['$scope', '$http', '$injector', '$rootScope', function($scope, $http, $injector, $rootScope) {

  $scope.posting = function () {
    console.log("testing");
    var vm = this;
    var newContent = {};

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

  // $http.get("https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA")
  //   .success(function(response) {
  //       $scope.myobj = response;
  // });

  // this is the longer version of the $http get service
  $http.get("https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA")
  .then(function(response) {
      $scope.myobj = response.data;
  });

  // $scope.delete = function(eid) {
  //     var tbd = $scope.eid;
  //     console.log(eid);
  //     $http.delete('https://api.mlab.com/api/1/databases/unnamed/collections/' + tbd + '?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA')
  //         .success(function(response) {
  //             console.log('Deleted');
  //         });
  // };


}]);
