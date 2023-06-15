const express = require('express')
const app = express()
const PORT = 3000
app.get('/user',(req,res)=>{
    let url_name = req.param('name')
    let url_gender = req.param('gender')
    let url_age = req.param('age')
    let url_address = req.param('address')
    /* http://localhost:3000/user?name=%27%EB%B0%95%ED%8C%90%EC%88%98%27&age=33 */

    res.send("userName:"+url_name+" gender:"+url_gender+" age:"+url_age+" address:"+url_address)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
