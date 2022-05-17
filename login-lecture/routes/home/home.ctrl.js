"use strict";

const hello = (req, res) =>{ //hello라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해줌
    res.render("home/index");
}

const login = (req, res)=>{
    res.render("home/login");
};

module.exports = { // 외부에서 사용할 수 있게 object로 빼줌
    hello,
    login,
};

/*
object =  { key : value } 으로 구성 되어있다
key값만 쓰게 된다면 value는 자동으로 키랑 같아진다.
hello : hello
login : login

*/