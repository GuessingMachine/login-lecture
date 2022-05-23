"use strict" 

// 모듈
const express = require("express")
const app = express();

const bodyParser = require("body-parser"); // 바디파서로 바디에 있는 값 읽어옴

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); 
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); 

// 바디 파서를 읽기 위한 미들웨어들
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식 않는 문제 해결

app.use("/", home);

module.exports = app; 