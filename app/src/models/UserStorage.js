"use strict";

class UserStorage{
    static #users={ //멤버 변수는 const안되고 UserStorage class에서 바로 접근하려고 static 선언
        // '#'해서 public에서 private로 접근 제한자를 바꿔서 은닉화
        id: ["f9","flover","forever"],
        pw: ["1234", "#0214", "ever"],
        name: ["프로미스나인", "플로버", "영원히"],
    };

    static getUsers(...fields){ //...변수명 하면 받아 온 값을 변수명을 가진 배열형태로 저장됨
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{ // newUsers는 값을 받는 곳이고, field은 fields의 값들을 순회한다.
            if(users.hasOwnProperty(field)){ //hasOwnProperty는 field가 가지고 있는 키 값을 user가 가지고 있는지 확인 
                newUsers[field] = users[field];
            }
            return newUsers; // 리턴 값으로 넘겨주게 되면, 다시 reduce의 파라미터인 newUsers에 들어간다.
        }, {}); //uewUsers 초기값은 default : fields의 배열의 초기값, 하지만 유저가 설정이 가능하다 
        return newUsers;
    }
}

module.exports = UserStorage;