const express = require('express')
const path = require('path') // 절대 경로를 뽑아주는 모듈
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './4ex_dist2')
console.log(_path)

app.use('/ksj', express.static(_path))
app.use(logger('tiny'))
app.get('/ksj/data',(req,res)=>{
    const name = req.query.name
    const age = req.query.age
    const gender = req.query.gender
    const memo = req.query.memo
    const date = req.query.date
    
    let list = ``
    list += `<fieldset>
                <legend>데이터전송 성공!!</legend>
                <div class="modal">
                    <img src="http://tfjs.site:7903/ksj/Nari3.jpg" alt="나리" width="500px" height="200px"/><br>
                    <span>${name}님 어서오세요!<br/>접속하신 날짜는 ${date}입니다.</span>
                </div>
            </fieldset>
            <div class="header">
                <h1 class="head_tit">어서오세요 성준서버입니다. 서버 상태 : 
                <span class="state">ON</span></h1>
            </div>
            <h2><a href="index.html">홈으로</a></h2>
    
      <style>
        .header {background: black;color: tomato;position:absolute;left:0;top:0;display:none}
        .state {color: greenyellow;}
        .fieldset {display: block;width: 100%;height: 100%;}
        .modal {background: beige;box-shadow: 3px 3px 10px black;}
      </style>
      
      <script>
        const body = document.querySelector("body");
        const header = document.querySelector(".header")
        const modal = document.querySelector("fieldset");
            body.addEventListener("click", () => {
                modal.style.display = "none";
                header.style.display = "block";
            });
      </script>`
  
    // 모달 창을 클라이언트에게 전송
    res.send(list);
  
    // 클라이언트에서 모달 창을 닫기 위한 JavaScript 코드를 전송
    console.log(name, age, gender, memo, date);
  });


app.listen(PORT,()=>{
    console.log(`SERVER ON! ${PORT}!`)
})


