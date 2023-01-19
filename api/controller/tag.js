const mongoose = require('mongoose');
const tag = require("../models/tag");
const liveController = {};


liveController.addtag = async function (req, res){
    try{
        console.log(req.body , "tagggggggg");
        const tags = new tag(req.body);
        await tags.save();
        return res.status(200).send({
            success:true,
            data:tags
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}



module.exports = liveController;