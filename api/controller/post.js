const mongoose = require("mongoose");
const post = require("../models/post");
const like = mongoose.model("post");
const liveController = {};

liveController.addpost = async function (req, res ) {
    // console.log(req.body, "posttdsssss11");
    //     // console.log(req.files,'111111111111111111111111111');
    //     if(req.files.featured_image){
    //         req.body.featured = req.files.featured_image[0].path
    //     }
    //     if(req.files.thumbnail){
    //         req.body.thumbnail = req.files.thumbnail[0].path
    //     }
    //     const posts = new post(req.body);
    //     await posts.save();
    //     return res.status(200).send({
    //         success:true,
    //         data:posts
    //     })
    try {
        console.log(req.body, "posttdsssss11");
        console.log(req.files,'111111111111111111111111111');
        if(req.files.featured_image){
            req.body.featured = req.files.featured_image[0].path
        }
        if(req.files.thumbnail){
            req.body.thumbnail = req.files.thumbnail[0].path
        }
        const posts = new post(req.body);
        await posts.save();
        return res.status(200).send({
            success:true,
            data:posts
        })
    } catch(err) {
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.postDelete = async function(req , res){
    try{
        console.log(req.params.id , "deleeeeeteeee");
        const posts = new post(req.body);
        await posts.deleteOne({'_id': req.params.id});
        console.log({'_id': req.params.id} , 'deleteagainnnn');
        return res.status(200).send({
            success:true,
            data:posts,
            msg:"successfully deleted"
        })

    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err+"error in delete API"
        })
    }
}

liveController.postUpdate = async function(req , res){
    try{
        console.log(req.params.id , "updateeeee");
        const posts = new post(req.body);
        await posts.updateOne({'_id': req.params.id});
        console.log({'_id': req.params.id} , 'updateagainnnn');
        console.log(req.body , "update");
        return res.status(200).send({
            success:true,
            data:posts,
            msg:"successfully updated"
        })

    }catch(err){
        console.log(req.body , "sdfsddsfsddsf")
        return res.status(500).send({
            success:false,
            msg:err + "error in updated API"
        })
    }
}

liveController.postlist = async function (req, res) {
    try {
        console.log(req.body, "postShowwwdsssss11");
        const posts = await post.find()
        return res.status(200).send({
            success:true,
            data:posts
        })
    } catch(err) {
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.like = async function (req, res){
    try{
        console.log(req.body._id , "likeee");
        like.findByIdAndUpdate(req.body._id),{
            $pull:{likes:req.user._id}
        }
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

module.exports = liveController;