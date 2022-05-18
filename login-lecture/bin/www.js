"use strict" 

const app = require("../app"); //상위 폴더에 있는 앱을 받아옴

const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});