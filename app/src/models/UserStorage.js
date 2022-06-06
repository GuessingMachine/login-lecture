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

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){ 
                newUsers[field] = users[field];
            }
            return newUsers; 
        }, {}); 
        return newUsers;
    }

    static getUsers(isAll,...fields){ 
        return fs.readFile("./src/databases/DB/users.json")
        .then((data)=>{
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.err);
        
        //const users = this.#users;
       
    }

    static getUserInfo(id){ //아이디와 관련된 정보 찾아서 반환
        return fs.readFile("./src/databases/DB/users.json")
        .then((data)=>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.err);
    }

    static async save(userInfo){
      const users = await this.getUsers(true); // true로 해서 파일에 모든 정보를 다 가져옴
      if(users.id.includes(userInfo.id)) {// 클라이언트가 입력한 id가 users라는 json파일에 읽어온 데이터에 존재한다면
        throw "이미 존재하는 아이디입니다.";
      }  
      // 데이터 추가
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.pw.push(userInfo.psw);
      fs.writeFile("./src/databases/DB/users.json", JSON.stringify(users)); //반환값 없음
      return { success: true };
    }
}

module.exports = UserStorage;