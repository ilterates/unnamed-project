// public/js/services/VideoService.js
angular.module('VideoService', []).factory('Video', ['$http', function($http) {

    return {
        // call to get all videos
        get : function() {
            return $http.get('/api/videos');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new video
        create : function(videoData) {
            return $http.post('/api/videos', videoData);
        },

        // call to DELETE a video
        delete : function(id) {
            return $http.delete('/api/videos/' + id);
        }
    };       

}]);
