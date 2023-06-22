const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')

app.use(express.json()) // post 방식으로
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/'))
app.use(logger('tiny'))

app.post('/data', (req, res) => {
  const obj = req.body
  fs.writeFile(_path + obj.name + '.txt', obj.content, (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('${obj.name}으로 저장되었습니다.');history.go(-1)</script>`
    )
  })
})

app.get('/list', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    let list = '<div class="head"><h1>POST방식 파일작성 리스트</h1></div><ul>'
    data.forEach((v) => {
      if (v.indexOf('.') === -1) {
        list += `<li class="list"><a href="#">[${v}]</a></li>`
      } else {
        list += `<li class="list"><a href="/${v}">${v}</a>
                <button onclick="location.href='del/${v}'">삭제</button></li>`
      }
    })
    list += '</ul>'
    list +=
      '<button class="create_btn"><a href="http://localhost:3000/">작성</a></button>'
    list += `<style>
            .head{background:black;}
            h1{color:rgb(238, 89, 158);animation:header 8s infinite linear;}
            @keyframes header {
                0% {
                  transform: translateX(900px);
                }
                100% {
                  transform: translateX(-400px);
                }
              }
            .create_btn {margin-left:10px;font-size:1.2rem;background: rgb(209, 146, 146);width: 80px;height: 60px;border: none;border-radius: 20px;transition: 0.15s ease-in;font-weight: bold;}
            .create_btn:hover {transform: scale(1.05);background: rgb(220, 228, 148);}
            a {text-decoration:none;color: blue;}
            .list {margin-bottom:5px;background: beige;transition: 1.2s linear;}
            .list:hover {transform: scale(1.01);background: rgb(197, 197, 176);}
                </style>`
    res.send(list)
  })
})

app.get('/del/:fname', (req, res) => {
  const fname = req.params.fname
  fs.unlink(_path + '/' + fname, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('삭제를 성공하였습니다.')
  })
  res.send(
    `<script>alert('${fname}파일을 삭제하였습니다.');location.href=document.referrer</script>`
  )
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})
