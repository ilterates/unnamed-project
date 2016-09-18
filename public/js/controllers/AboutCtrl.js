// public/js/controllers/AboutCtrl.js
angular.module('AboutCtrl', []).controller('AboutController', function($scope) {

  console.log("test");
  $("#arrowDown").click(function() {
    $("#about").animate({
        scrollTop: $("#devs").offset().top
    }, 2000);
    console.log("clicked");
});

});
