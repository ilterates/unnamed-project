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
