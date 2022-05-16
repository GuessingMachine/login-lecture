"use strict" //안전하게 코딩할 수 있도록 도와줌

// 모듈
const express = require("express")
const app = express();

//라우팅
const home = require("./routes/home");

const PORT = 3000;

app.set("views", "./views"); 
app.set("view engine", "ejs");

app.use("/", home);//미들웨어를 등록하는 use메소드를 사용해서 외부로 던진 router파일 사용

app.listen(PORT, function() {
    console.log("서버 가동");
});