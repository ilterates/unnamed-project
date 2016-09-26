// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', ['$scope', '$http', '$sce', '$injector', function($scope, $http, $sce, $injector) {
    $scope.posting = function () {
      var vm = this;
      // checks if title and link entered
        if ( $('#title').val() !== "" || $('#link').val() !== "" ) {
      //
        console.log("button clicked");
          $http({
            method: 'POST',
            // Must hide API key eventually
            url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=DtPYymGWE-ferzPHl2eQhkjsh0dH4_54',
            data: JSON.stringify({
              title      : $('#title').val(),
              link       : $('#link').val(),
              description: $('#description').val()
            }),
            contentType: "application/json"
          }).then(function postSuccessCallback(response) {
            console.log(response.data);
            console.log("post success");
            alert("Success");
          }, function postErrorCallback(response) {
            console.log('There was an error posting the data', response);
          });

  } else {
    alert("title or link empty");
  }
};

  $scope.fetch = function () {
    console.log("is this fetch working?");
    $http({
      method: 'GET',
      url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=DtPYymGWE-ferzPHl2eQhkjsh0dH4_54',
    }).then(function getSuccessCallback(response) {
      $scope.lenght = Object.keys(response.data).reverse()[0];
      $scope.data = response.data;
      $scope.jeezy = $scope.data[$scope.lenght].link;
      $scope.url = $sce.trustAsResourceUrl($scope.jeezy);
    }, function getErrorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  };

}]);
