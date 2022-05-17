"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl") // 받아옴

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router