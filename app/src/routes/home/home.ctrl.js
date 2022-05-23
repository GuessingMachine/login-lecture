"use strict";


const output ={ // 랜더링
    home : (req, res) =>{ 
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};

module.exports = { 
    output,
    process,
};
