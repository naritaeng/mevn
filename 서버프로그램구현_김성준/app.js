const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const fs = require('fs')
const multer = require('multer')
const PORT = 3000
const _path = path.join(__dirname, '/dist')
console.log('현재 경로:' + _path)

app.use(express.json()) // post 방식
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/test', (req, res) => {
  let id = req.query.id
  let name = req.query.name
  let list = `<h3>아이디:${id}</h3>`
  list += `<h3>이름:${name}</h3>`
  res.send(list)
})

app.post('/data', (req, res) => {
  const obj = req.body
  fs.writeFile(_path + obj.name + '.txt', obj.qna, (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('${obj.name}으로 저장되었습니다.');history.go(-1)</script>`
    )
  })
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path) // 경로를 같은 폴더로 지정
  },
  filename: function (req, file, cb) {
    const fix = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    cb(null, fix)
    T
  }
})

const upload = multer({ storage: storage }) // 멀터의 옵션을 디스크스토리지 엔진 탑제

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert('파일 업로드 완료!');location.replace('index.html')</script>`
  )
})
app.get('/mkdir', (req, res) => {
  const mk = req.query.mk
  fs.mkdir(_path + mk, (e) => {
    if (e) {
      console.log(e)
      return
    }
  })
  res.send(
    `<script>alert('${mk}생성되었습니다.!');location.replace('index.html')</script>`
  )
})

app.listen(PORT, () => {
  console.log(`서버가 가동되었고, 포트는 ${PORT}입니다.`)
})
