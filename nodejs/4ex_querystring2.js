const express = require('express')
const app = express()
const PORT = 3000
app.get('/user',(req,res)=>{
    let url_name = req.query.name
    let url_age = +req.query.age
    res.send("userName:"+url_name+" age:"+url_age)

})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
