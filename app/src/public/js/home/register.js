// front end
"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psw"),
    confirmPsword = document.querySelector("#confirm-psword"),
    email = document.querySelector("#email"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register); 

function register(){
    const req = {
        id : id.value,
        name : name.value,   
        psw : psword.value,
        confirmPsword : confirmPsword.value,
        email : email.value
    };

    fetch("/register", { // 로그인 API
        method: "POST", 
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), 
    }).then((res) => res.json()) // 서버의 응답은 then으로 가져온다
    .then((res)=>{
        if (res.success){
            location.href = '/login'; 
        }else{
            alert(res.msg); 
        }
    })
    .catch((err) => { //  오류 알림
        console.error(new Error("회원가입 중 에러 발생")); 
       
    })
}

