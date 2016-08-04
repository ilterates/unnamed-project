// public/js/controllers/VideoCtrl.js
angular.module('VideoCtrl', [])
  .controller('VideoController', VideoController);

  // $scope.tagline = 'Video video Video!';

VideoController.$inject = ['$http'];
  function VideoController ($http) {
    var vm = this;
    var newContent = {};
    vm.createVideo = function () {
        $http({
          method: 'POST',
          url: 'https://api.mlab.com/api/1/databases/unnamed/collections/my-coll?apiKey=Mqu4oGAuzrqCOpQOkUyZArFXtBol-o04',
          data: vm.newContent,
        }).then(function successCallback(response) {
          vm.newContent.push(response.data);
          console.log("success");
        }, function errorCallback(response) {
          console.log('There was an error posting the data', response);
        });

    };
  }
