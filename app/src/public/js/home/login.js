// front end
"use strict"

const id = document.querySelector("#id"), 
 psword = document.querySelector("psw"),
 loginBtn = document.querySelector("botton");

loginBtn.addEventListener("click", login); 
function login(){
    const req = {
        id : id.value,
        psw : psword.value
    }

    fetch("/login", {
        method: "POST", // body로 정보를 전달할 땐 POST방식 사용
        headers: { // 내가 보내는 데이터가 JSON이라고 알려줌
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) // JOSN 형태로 변경, stringify 문자열로 변경 
    }); // 서버로 보냄 (경로, 보낼 내용) object 형태로 보내야함
}

