const express = require("express") // require라는 명령어로 express 다운 받음
const app = express(); //app라는 변수에 express 실행해서 넣어줌

app.get("/",(req, res)=>{//서버의 루트 경로 지정
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트입니다.
    </body>
    </html>`);
});

app.get("/login",(req, res)=>{//로그인 화면 지정
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text" placeholder="아이디"><br>
        <input type="text" placeholder="비밀번호"><br>
        <button>로그인</button>
    </body>
    </html>
    `
    );
});

app.listen(3000, function() { // 서버 띄움 3000포트 열어달라
    console.log("서버 가동");
});