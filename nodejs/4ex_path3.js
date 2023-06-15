const express = require('express')
const app = express()
const PORT = 3000

app.get('/user',(req,res)=>{
    const id = req.query.id;
    const arr = ['My life is egg','The Avengers are Back','javascript is good enough']

    const str = `<body>
    <a href="/user?id=0">Life</a>
    <a href="/user?id=1">Hero</a>
    <a href="/user?id=2">Javascript</a>
    <h1>${arr[+id]??"버튼을 눌러주세요!"}</h1>
</body>`

    res.send(str)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
