const express = require('express')
const path = require('path') // 절대 경로를 뽑아주는 모듈
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './4ex_portfollio_dist')
console.log(_path)

app.use('/ksj', express.static(_path))
app.use(logger('tiny'))
app.get('/ksj',(req,res)=>{
})

app.listen(PORT,()=>{
    console.log(`SERVER ON! ${PORT}!`)
})


