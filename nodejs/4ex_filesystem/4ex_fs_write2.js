const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()

const _path = path.join(__dirname,'/')
app.use(express.static(__dirname+'/'))
app.use(logger('tiny'))

app.get('/data',(req,res)=>{
    const name = req.query.name
    const content = req.query.content
    fs.writeFile(_path+name+'.txt',content,(e)=>{
        if(e)console.log(e)
        console.log('파일 작성이 완료되었습니다.')
        res.send(`<script>alert('${name}으로 저장되었습니다.');history.go(-1)</script>`)
    })
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})