var mongoose = require('mongoose');
 
var PostSchema = new mongoose.PostSchema({

    title: String,
    link: String,
    upvotes: {type: Number, default: 0},
    comments: [{ type: mongoose.schema.Types.ObjectId, ref: 'Comment' }]

});

mongoose.model('Post', PostSchema);