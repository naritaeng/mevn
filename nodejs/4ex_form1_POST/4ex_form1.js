const express = require('express')
const path = require('path') // 절대 경로를 뽑아주는 모듈
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './4ex_dist')

/* POST 해석 */
app.use(express.json()) // post 방식으로
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.post('/info',(req,res)=>{
    const obj = req.body
    console.log(obj)
    console.log(obj.id)
    console.log(obj.pw)
})




app.listen(PORT,()=>{
    console.log(`SERVER ON! ${PORT}!`)
})