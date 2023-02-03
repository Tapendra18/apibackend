const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: "title"
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    // desc: String,
    thumbnail:
    {
        type: String,
        // required: true
    },
    // featured:
    // {
    //     type: String,
    //     // required: true
    // },
    like: {
        type: Number,
        default: 0,
        required: true,
        ref:"post"
    },
    dislike: {
        type: Number,
        default: 0,
        required: true,
        ref:"post"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
}
    ,
    { timestamps: true }
)

module.exports = mongoose.model('post', postSchema);