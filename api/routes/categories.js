const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const cate = require("../controller/categories");


router.post('/category', cate.addCategory);
router.get('/', cate.categoryList);


module.exports = router
