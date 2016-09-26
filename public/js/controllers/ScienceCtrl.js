// public/js/controllers/ScienceCtrl.js
angular.module('ScienceCtrl', [])
  .controller('ScienceController', ['$scope', '$http', '$sce', '$injector', function($scope, $http, $sce, $injector) {
  this.sciencePosting = function () {
    // checks if title and link entered
    console.log("button clicked");
    if ( $('#scienceTitle').val() !== "" || $('#scienceLink').val() !== "" ) {
    //
      $http({
        method: 'POST',
        url: 'https://api.mlab.com/api/1/databases/unnamed/collections/science?apiKey=DtPYymGWE-ferzPHl2eQhkjsh0dH4_54',
        data: JSON.stringify({
          title      : $('#scienceTitle').val(),
          link       : $('#scienceLink').val(),
          description: $('#scienceDescription').val()
        }),
        contentType: "application/json"
      }).then(function postSuccessCallback(response) {
        console.log(response.data);
        console.log("post SCIENCE success");
        alert("Success");
      }, function postErrorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    } else {
     alert("title or link empty");
    }
  };

  $scope.scienceFetch = function () {
    console.log("is this SCIENCE fetch working?");
    $http({
      method: 'GET',
      url: 'https://api.mlab.com/api/1/databases/unnamed/collections/science?apiKey=DtPYymGWE-ferzPHl2eQhkjsh0dH4_54',
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
