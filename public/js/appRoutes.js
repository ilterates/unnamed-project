// public/js/appRoutes.js
    angular
      .module('appRoutes', [])
      .config(['$routeProvider', '$locationProvider',

      function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/video.html',
            controller: 'VideoController',
            as: 'VideoCtrl'
        }).when('/videos', {
            templateUrl: 'views/video.html',
            controller: 'VideoController',
            as: 'VideoCtrl'
        }).when('/science', {
              templateUrl: 'views/science.html',
              controller: 'ScienceController',
              as: 'ScienceCtrl'
        }).when('/content', {
            templateUrl: 'views/content.html',
            controller: 'ContentController',
            as: 'ContentCtrl'
        }).when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            as: 'AboutCtrl'
        }).otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

}]);
