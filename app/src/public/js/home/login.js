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
    }); 
}

