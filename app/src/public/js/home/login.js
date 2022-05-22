// front end
"use strict"

const id = document.querySelector("#id"), //#은 태그의 id로 부여된 것을 가져온다
 psword = document.querySelector("psw"),
 loginBtn = document.querySelector("botton");

loginBtn.addEventListener("click", login); //이벤트 버튼이 눌리게 되면, 함수가 작동

function login(){
    const req = {
        id : id.value,
        psw : psword.value
    }
}

