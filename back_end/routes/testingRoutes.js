const express = require("express");

const {
    createUser,
    helloUser,
} = require("../controllers/testingController");

const route=express.Router();
route.post('/createuser',createUser);

module.exports=route;
 