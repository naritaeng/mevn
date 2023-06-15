const express = require('express')
const app = express()
const PORT = 3000
app.get('/user/:name/:age/:gender/:address',(req,res)=>{
    const params = req.params;
    console.log(params)
    res.send("userName:"+params.name+" age:"+params.age+" gender:"+params.gender+" address:"+params.address)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
