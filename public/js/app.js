// public/js/app.js
var app = angular.module('unnamed', ['ngRoute', 'appRoutes', 'MainCtrl', 'VideoCtrl','ContentCtrl', 'VideoService']);

// $('#content-form').on("submit",function(e){
//   e.preventDefault();
//   var title = $("#title").val();
//   var url = $("#url").val();
//   var description = $("#description").val();
//   console.log("button clicked");
  // $.ajax({
  //    url: "https://api.mlab.com/api/1/databases/unnamed/collections/my-coll?apiKey=Mqu4oGAuzrqCOpQOkUyZArFXtBol-o04",
  // 	 data: JSON.stringify({
  //      "title" : title,
  //      "url" : url,
  //      "description" : description
  //    }),
  // 	 type: "POST",
  // 	 contentType: "application/json",
  //    success: function(data){
  //      console.log("success post");
  //    },
  //    error: function(xhr, status, err){
  //      console.log(err);
  //    }
  //   } );
// });
// var hidden = false;
// $(window).on('mousemove', function movement() {
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
// });
// $(window).click(movement).done(movement);
