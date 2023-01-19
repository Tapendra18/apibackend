const express = require('express');
const router = express.Router();
const Post = require("../controller/tag");

router.post('/taglist' , Post.addtag);

module.exports = router;