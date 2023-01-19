const mongoose = require("mongoose");
const post = require("./post");
mongoose.set('strictQuery' , false);

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        ref:"post"
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('comment' , commentSchema);