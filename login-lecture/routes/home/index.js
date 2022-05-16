"use strict"

const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.render("home/index");
});

router.get("/login",(req, res)=>{
    res.render("home/login");
});

module.exports = router//외부에서 사용할 수 있도록 해줌