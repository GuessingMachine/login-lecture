"use strict";

class UserStorage{
    static #users={ //멤버 변수는 const안되고 UserStorage class에서 바로 접근하려고 static 선언
        // '#'해서 public에서 private로 접근 제한자를 바꿔서 은닉화
        id: ["f9","flover","forever"],
        pw: ["1234", "#0214", "ever"],
        name: ["프로미스나인", "플로버", "영원히"],
    };

    static getUsers(...fields){ 
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){ 
                newUsers[field] = users[field];
            }
            return newUsers; 
        }, {}); 
        return newUsers;
    }

    static getUserInfo(id){ //아이디와 관련된 정보 찾아서 반환
        const users = this.#users; // 회원 정보
        const idx = users.id.indexOf(id); // 입력한 id관련된 인덱스 번호
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
}

module.exports = UserStorage;