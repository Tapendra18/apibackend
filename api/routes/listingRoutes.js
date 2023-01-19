const express = require('express');
const router=express.Router();
const mongoose = require("mongoose");
const list = require("../controller/listing");

router.post('/listing' , list.addlisting);

module.exports = router;