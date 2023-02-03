const express = require('express');
const router = express.Router();
const postController = require("../controller/post");

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname)); //Appending .jpg
    },
});

const upload = multer({storage:storage})

router.post('/add',upload.fields([{name:"thumbnail", maxCount:1}]) ,postController.addpost);
router.get('/' , postController.postlist);
router.put('/like',postController.like);
router.delete('/:id' ,postController.postDelete);
router.put('/:id' ,postController.postUpdate);
module.exports = router;