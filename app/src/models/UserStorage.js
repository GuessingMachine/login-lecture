"use strict";

const fs = require("fs").promises; // users 파일 읽어 오기 위해서, promise반환 가능

class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); // 입력한 id관련된 인덱스 번호
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static getUsers(...fields){ 
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){ 
                newUsers[field] = users[field];
            }
            return newUsers; 
        }, {}); 
        return newUsers;
    }

    static getUserInfo(id){ //아이디와 관련된 정보 찾아서 반환
        return fs.readFile("./src/databases/DB/users.json")
        .then((data)=>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.err);
    }

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.psw);
        console.log(users);
        return { success:true };
    }
}

module.exports = UserStorage;