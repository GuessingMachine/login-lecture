"use strict";

const User = require("../../models/User");

const output ={ // 랜더링
    home : (req, res) =>{ 
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    }
};

const process = { // 로그인 인증
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = { 
    output,
    process,
};
