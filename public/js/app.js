// public/js/app.js
var app = angular.module('unnamed', ['ngRoute', 'appRoutes', 'SoonCtrl', 'ScienceCtrl', 'AboutCtrl', 'VideoCtrl','ContentCtrl', 'VideoService']);

// var hidden = false;
// window.setInterval( function() {
//   if (hidden === false) {
//     $("#moving").animate({left: "-20px"})
//                 .animate({bottom: "20px"})
//                 .fadeOut( 500 );
//      setTimeout(500);
//      hidden = true;
//  } else {
//   $("#moving").animate({left: "20px"})
//               .animate({bottom: "-20px"})
//               .fadeIn( 500 );
//    hidden = false;
//  }
// }, 1000);
