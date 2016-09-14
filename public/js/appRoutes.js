// public/js/appRoutes.js
    angular
      .module('appRoutes', [])
      .config(['$routeProvider', '$locationProvider',

      function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/soon.html',
            controller: 'SoonController',
            as: 'SoonCtrl'
        }).when('/videos', {
            templateUrl: 'views/video.html',
            controller: 'VideoController',
            as: 'VideoCtrl'
        }).when('/content', {
            templateUrl: 'views/content.html',
            controller: 'ContentController',
            as: 'ContentCtrl'
        }).otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

}]);
