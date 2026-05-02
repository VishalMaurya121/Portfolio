const express=require("express");
const { sendMsg } = require("../controllers/messageController");
//const multer = require("multer");
//const upload = multer();
const Route=express.Router();

Route.post("/sendmsg", sendMsg);

module.exports=Route;
