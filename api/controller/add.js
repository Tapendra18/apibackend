const mongoose = require("mongoose");
const Add = require("../models/add");
const liveController = {};

liveController.addpost = async function (req, res){
    try{
        console.log(req.body , "addddddddd");
        console.log(req.file , "imageeeeee");

        const adds = new Add(req.body , req.file);
        await adds.save();
        return res.status(200).send({
            success:true,
            data:adds
        })
    } catch(err){
        return res.status(500).send({
            success:false,
            msg:"not working"
        })
    }
}

module.exports = liveController;