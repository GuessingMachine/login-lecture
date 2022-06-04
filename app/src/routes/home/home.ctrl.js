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
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = { 
    output,
    process,
};
