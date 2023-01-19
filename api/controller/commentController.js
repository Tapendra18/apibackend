const mongoose = require("mongoose");
const { reset } = require("nodemon");
const commentModel = require('../models/commentModels');
const liveController = {};

liveController.addComment = async function (req, res) {
    try {
        const commentModels = new commentModel(req.body);
        await commentModels.save();
        console.log(req.body, "commmmmmentttt");
        return res.status(200).send({
            success: true,
            data: commentModels
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.updateComment = async function (req, res){
    try{
        // console.log(req.body ,"commentttupdaet");
        // commentModel.findOneAndUpdate(req.params.id).status(200).send({
        //     success:true,
        //     data:commentModel
        // })
        // commentModel.save();
        commentModel.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
            if (err) {
              return res.status(500).update({error: "Problem with Updating the   Employee recored "})
            };
            res.send({success: "Updation successfull"});
          })
        
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

    module.exports = liveController;