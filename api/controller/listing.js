const mongoose = require("mongoose");
const listing = require("../models/listing");
const liveController = {};

liveController.addlisting = async function(req, res){
    try{
        console.log(req.body , "listingggg");
        const List = new listing(req.body);
        await List.save();
        return res.status(200).send({
            success:true,
            data:List
        });
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

module.exports = liveController