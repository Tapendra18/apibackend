const mongoose = require("mongoose");
const Categories = require("../models/categories");
const liveController = {};

liveController.addCategory = async function (req, res) {
    try {
        console.log(req.body, "categoriedsssss11");
        const category = new Categories(req.body)
        await category.save()
        return res.status(200).send({
            success:true,
            data:category
        })
    } catch(err) {
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

liveController.categoryList = async function (req, res) {
    try {
        // if(req.body){

        // }
        console.log(req.body, "categoriedsssss11");
        const categorys = await Categories.find()
        return res.status(200).send({
            success:true,
            data:categorys
        })
    } catch(err) {
        return res.status(500).send({
            success:false,
            msg:err
        })
    }
}

module.exports = liveController
