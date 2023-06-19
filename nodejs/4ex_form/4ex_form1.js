const express = require('express')
const path = require('path') // 절대 경로를 뽑아주는 모듈
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './4ex_dist')
console.log(_path)

app.use('/main', express.static(_path))
app.use(logger('tiny'))
app.get('/main/data',(req,res)=>{
    const name = req.query.name
    const age = req.query.age
    const content = req.query.content
    res.redirect('/main/done.html')
    console.log(name,age,content)
})

app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})