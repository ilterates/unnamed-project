// public/js/controllers/VideoCtrl.js
var app = angular.module('VideoCtrl', []);
  app.controller('VideoController', ['$scope', '$sce', '$http', '$injector', '$rootScope', function($scope, $sce, $http, $injector, $rootScope) {

  $scope.code = 'oHg5SJYRHA0';

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



  $http({
    method: 'GET',
    url: 'https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA',
  }).then(function getSuccessCallback(response) {
    var videos = response.data;
    $scope.videos = videos;
    var newArr = [];
    $scope.newArr = newArr;
    for (var i=0; i < videos.length; i++){
      console.log(videos[i].link);
      linkz = videos[i].link;
      $scope.linkz = videos[i].link;
      newArr.push(linkz);
    }
    console.log(newArr);
    return newArr;
    // $scope.trustSrc = function(src) {
    //   return $sce.trustAsResourceUrl(src);
    // };
    //
    // $scope.movie = {src:'"' + $scope.linkz + '"'};
  }, function getErrorCallback(response) {
    console.log('There was an error getting the data', response);
  });




  // $http.get("https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA")
  //   .success(function(response) {
  //       $scope.myobj = response;
  // });

  // this is the longer version of the $http get service
  // $http.get("https://api.mlab.com/api/1/databases/unnamed/collections/content?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA")
  // .then(function(response) {
  //     $scope.myobj = response.data;
  // });

  // $scope.delete = function(eid) {
  //     var tbd = $scope.eid;
  //     console.log(eid);
  //     $http.delete('https://api.mlab.com/api/1/databases/unnamed/collections/' + tbd + '?apiKey=CFYgCuDerS1QjQ7LtxPzDLDR9OcxIyCA')
  //         .success(function(response) {
  //             console.log('Deleted');
  //         });
  // };


  }]);
  app.directive('myYoutube', function($sce) {
    return {
      restrict: 'EA',
      scope: { code:'=' },
      replace: true,
      template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
      link: function (scope) {
          console.log('here');
          scope.$watch('code', function (newVal) {
             if (newVal) {
                 scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
             }
          });
      }
    };
  });
