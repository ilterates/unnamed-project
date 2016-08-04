// public/js/appRoutes.js
    angular
      .module('appRoutes', [])
      .config(['$routeProvider', '$locationProvider',
        
      function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            as: 'MainCtrl'
        })

        // videos page that will use the VideoController
        .when('/videos', {
            templateUrl: 'views/video.html',
            controller: 'VideoController',
            as: 'VideoCtrl'
        })
        .when('/content', {
            templateUrl: 'views/content.html',
            controller: 'ContentController',
            as: 'ContentCtrl'
        });

    $locationProvider.html5Mode(true);

}]);
