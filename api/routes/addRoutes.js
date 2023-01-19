const express = require("express");
const router = express.Router();
const add = require("../controller/add");

router.post('/list', add.addpost);

module.exports = router;