"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl") 

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);//로그인 기능처리, 로그인 정보는 post로 보내주니까

module.exports = router