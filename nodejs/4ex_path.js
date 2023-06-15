const express = require('express')
const app = express()
const PORT = 3000
app.get('/user/:name/:age',(req,res)=>{
    const params = req.params;
    console.log(params)
    res.send("userName:"+params.name+" age:"+params.age)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
