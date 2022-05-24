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

    fetch("/login", { // 로그인 API
        method: "POST", 
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), 
    }).then((res) => res.json()) // 서버의 응답은 then으로 가져온다
    .then((res) => console.log(res)); // promise type이라 then으로 접근해야함
}

