const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000
// --- 1번 로직
app.use(loogger('tiny'))
app.get('/',(req,res,next)=>{
    res.end('hello')
    next()
})
app.use((req,res,next)=>{
    console.log('1 Time:', Date.now())
    next()
})
app.use((req,res,next)=>{
    console.log('2 Time:', Date.now())
    next()
})
// ---2번 로직

app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
/*
서버가 생성되었습니다.3000
1 Time: 1686796417770
2 Time: 1686796417771   
GET / 404 139 - 4.076 ms
1 Time: 1686796468438
2 Time: 1686796468438   
GET / 404 139 - 1.223 ms
1 Time: 1686796475342
2 Time: 1686796475342   
GET / 404 139 - 0.939 ms
*/
