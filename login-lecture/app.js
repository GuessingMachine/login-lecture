const express = require("express")
const app = express();

// 앱 세팅
app.set("views", "./views"); // 뷰를 관리하는 파일(views) 불러옴
app.set("view engine", "ejs"); // views파일에 있는 html을 어떤 엔진으로 해석할지 지정

app.get("/",(req, res)=>{
    res.render("home/index");// views폴더안에 있는 ejs파일로 이동
});

app.get("/login",(req, res)=>{
    res.render("home/login");
});

app.listen(3000, function() {
    console.log("서버 가동");
});