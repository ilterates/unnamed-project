// app/models/video.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our video model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Video', {
    url : {type : String, default: ''}
});
