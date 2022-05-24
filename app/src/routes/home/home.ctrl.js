"use strict";

const output ={ // 랜더링
    home : (req, res) =>{ 
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
};

const users={
    id: ["f9","flover","forever"],
    pw: ["1234", "#0214", "ever"],
};

const process = { // 로그인 인증
    login: (req, res) => {
        const id = req.body.id,
            pass = req.body.psw;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pass){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = { 
    output,
    process,
};
