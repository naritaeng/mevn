const express = require('express')
const app = express()
const PORT = 3000

app.get('/user',(req,res)=>{
    const id = req.query.id;
    const arr = ['Apple','Banana','Strawberry','Melon','Orange']
    const student = ['강사님','예찬','재희','성준','영완','정우','창준','민지','병오','재영']
    let str = `<body><h1>김성준</h1><ul>`
    arr.forEach((v,i)=>{
        str += `<li><a href="/user?id=${i}">${v}</a></li>`
    })
    str +=`</ul></body><h1>${arr[+id]??'버튼을 눌러주세요!'}</h1>`
    student.forEach((v,i)=>{
        str += `<a href="http://tfjs.site:790${i}/user">${v}의 790${i}포트 접속하기</a><br>`
    })
    res.send(str)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
