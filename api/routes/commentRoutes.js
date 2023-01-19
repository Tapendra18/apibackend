const express = require('express');
const router = express.Router();
const commentController = require("../controller/commentController");

router.post('/add' , commentController.addComment);
router.patch('/comment/:id',commentController.updateComment);
module.exports = router;