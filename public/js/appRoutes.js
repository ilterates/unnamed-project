// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // videos page that will use the VideoController
        .when('/videos', {
            templateUrl: 'views/video.html',
            controller: 'VideoController'
        });

    $locationProvider.html5Mode(true);

}]);
