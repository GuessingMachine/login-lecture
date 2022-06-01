// front end
"use strict"

const id = document.querySelector("#id"),
  psword = document.querySelector("#psw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login); 

function login(){
    const req = {
        id : id.value,
        psw : psword.value
    };

    console.log(req.psw);

    fetch("/login", { // 로그인 API
        method: "POST", 
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), 
    }).then((res) => res.json()) // 서버의 응답은 then으로 가져온다
    .then((res)=>{
        if (res.success){
            location.href = '/'; 
        }else{
            alert(res.msg); 
        }
    })
    .catch((err) => { // 로그인 기능  오류 알림
        console.error(new Error("로그인 중 에러 발생")); 
       
    })
}

