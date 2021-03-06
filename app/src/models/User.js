// 로그인, 회원가입하는 기능
"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body; // 클라이언트가 보낸 id, password가져옴
    }

    async login(){
        const Client = this.body; // 클라이언트 정보
        const {id, pw} = await UserStorage.getUserInfo(Client.id); //클라이언트가 입력한 id가 있는지 확인해서 있으면 해당하는 아이디 비번 가져옴
    
        if(id){
            if( id === Client.id && pw === Client.psw){
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 일치하지 않습니다."};
        }
        return { success: false, msg: "존재하지 않는 계정입니다."};
    }

    async register(){
        const Client = this.body;
        try{
            const response = await UserStorage.save(Client); // 저장하는데 시간걸리니까
            return response;
        }catch (err) {
            return { success: false, msg: err };
        }
        
    }

}

module.exports = User;