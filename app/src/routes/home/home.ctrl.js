"use strict";

const UserStorage = require("../../models/UserStorage");

const output ={ // 랜더링
    home : (req, res) =>{ 
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
};

const process = { // 로그인 인증
    login: (req, res) => {
        const id = req.body.id,
            pass = req.body.psw;

        const users = UserStorage.getUsers("id","pw"); // 가져오고 싶은 데이터만 입력

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pass){
               response.success = true;
               return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다."
        return res.json(response);
    },
};

module.exports = { 
    output,
    process,
};
