const express = require('express')
const app = express()
const PORT = 3000


app.get('/search.naver',(req,res)=>{
    const equery = req.query.query
    const ewhere = req.query.where
    res.send(`요청하신 쿼리는 ${equery}과 ${ewhere}입니다.`)
})
app.get('/search.daum/:where/:sm/:fbm/:ie/:query',(req,res)=>{
    const obj = req.params
    console.log(obj)
    res.send(`요청하신 쿼리는 PATH방식으로 ${obj.where}과 ${obj.query}입니다.`)
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다. ${PORT}`)
})
