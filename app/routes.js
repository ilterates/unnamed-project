// app/routes.js

// grab the video model we just created
var Video = require('./models/video');

   module.exports = function(app) {

       // server routes ===========================================================
       // handle things like api calls
       // authentication routes

       // sample api route
       app.get('/api/videos', function(req, res) {
           // use mongoose to get all videos in the database
           Video.find(function(err, videos) {

               // if there is an error retrieving, send the error.
                               // nothing after res.send(err) will execute
               if (err)
                   res.send(err);

               res.json(videos); // return all videos in JSON format
           });
       });

       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)

       // frontend routes =========================================================
       // route to handle all angular requests
       app.get('*', function(req, res) {
           res.sendfile('./public/index.html'); // load our public/index.html file
       });

   };
