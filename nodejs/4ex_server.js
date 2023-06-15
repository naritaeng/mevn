const express = require('express')
const path = require('path') // 절대 경로를 뽑아주는 모듈
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './dist') // __dirname 절대경로를 찾음. 거기에 dist경로를 추가
console.log(_path) // d:\KSJ\MEVN\nodejs\dist
app.use('/', express.static(_path)) // dist폴더내의 index.html 기준으로 호스트 서비스시작
app.use(logger('tiny'))

app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})